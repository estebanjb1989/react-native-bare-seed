
export interface INostrEvent {
  id: string;
  created_at: number;
  kind: number;
  content: string;
  pubkey: string;
  sig: string;
}