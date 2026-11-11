CREATE TABLE IF NOT EXISTS shd_manual_orders (
  id uuid PRIMARY KEY,
  reference text NOT NULL UNIQUE,
  document jsonb NOT NULL,
  version integer NOT NULL DEFAULT 1,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
