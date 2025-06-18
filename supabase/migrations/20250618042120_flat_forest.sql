/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - Contact person's name
      - `email` (text, required) - Contact person's email
      - `subject` (text, required) - Message subject
      - `message` (text, required) - Message content
      - `created_at` (timestamptz, default now()) - When message was sent
      - `updated_at` (timestamptz, default now()) - Last update timestamp

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anonymous users to insert contact messages
    - Add policy for authenticated users to read all messages (for admin access)
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy to allow anonymous users to insert contact messages
CREATE POLICY "Allow anonymous users to insert contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy to allow authenticated users to read all contact messages (for admin access)
CREATE POLICY "Allow authenticated users to read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
  ON contact_messages(created_at DESC);

-- Create an index on email for potential future queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_email 
  ON contact_messages(email);