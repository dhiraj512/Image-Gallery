export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          created_at: string
          href: string | null
          id: number
          src: string
          tags: string[]
          title: string
        }
        Insert: {
          created_at?: string
          href?: string | null
          id?: number
          src: string
          tags: string[]
          title: string
        }
        Update: {
          created_at?: string
          href?: string | null
          id?: number
          src?: string
          tags?: string[]
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
