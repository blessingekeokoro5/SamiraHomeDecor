import csv,json,math,pathlib,sys
root=pathlib.Path(__file__).resolve().parents[1]
hubs=[('Adelaide','SA',-34.929,138.601,0),('Sydney','NSW',-33.8688,151.2093,0),('Central Coast','NSW',-33.425,151.341,0),('Newcastle','NSW',-32.929,151.779,0),('Melbourne','VIC',-37.814,144.963,0),('Brisbane','QLD',-27.47,153.026,0),('Gold Coast','QLD',-28.016,153.4,0),('Sunshine Coast','QLD',-26.65,153.066,0),('Canberra','ACT',-35.28,149.13,50),('Perth','WA',-31.953,115.857,150),('Hobart','TAS',-42.882,147.327,200),('Darwin','NT',-12.463,130.846,250)]
def km(a,b,c,d):
 r=math.pi/180;x=math.sin((c-a)*r/2)**2+math.cos(a*r)*math.cos(c*r)*math.sin((d-b)*r/2)**2;return 6371*2*math.asin(math.sqrt(x))
rows=[];zones={};seen=set()
for r in csv.DictReader(open(sys.argv[1], newline='', encoding='utf-8-sig')):
 if r['Category']!='Delivery Area':continue
 pc=r['Postcode'].zfill(4);key=(r['Suburb'],pc,r['State'])
 if key in seen:continue
 seen.add(key);rows.append(list(key));z=None
 if pc=='0800':r['Lat'],r['Lon']='-12.463','130.846'
 if r['Lat'] and r['Lon'] and pc not in ['2898','2899','6798','6799','5220','5221','5222','5223']:
  options=[(km(float(r['Lat']),float(r['Lon']),h[2],h[3]),h) for h in hubs if h[1]==r['State']]
  if options:
   dist,h=min(options,key=lambda p:p[0])
   if dist<=60:z={'label':h[0]+' metro','extra':h[4]}
   elif dist<=300:z={'label':h[0]+' regional','extra':h[4]+100+25*math.ceil((dist-60)/100)}
 # Conservative postcode-only pricing: any remote locality requires a quote.
 if pc not in zones:zones[pc]=z
 elif zones[pc] is None:zones[pc]=z
 elif z is None:pass
 elif z['extra']>zones[pc]['extra']:zones[pc]=z
rows.sort(key=lambda r:(r[0],r[1],r[2]))
code='/* Australian suburbs: schappim/australian-postcodes, snapshot 2026-05-27. See docs/location-data.md. Rates are proposed Samira tariffs, not supplier quotes. */\n(function(root){const rows='+json.dumps(rows,separators=(',',':'))+';const zones='+json.dumps(zones,separators=(',',':'))+';const api={rows,zones};if(typeof module===\'object\'&&module.exports)module.exports=api;else root.AuLocations=api;})(typeof window===\'undefined\'?globalThis:window);\n'
(root/'js/au-locations.js').write_text(code)
print(len(rows),'locations;',len(zones),'postcodes')
