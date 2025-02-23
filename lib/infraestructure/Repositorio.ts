import { SupabaseClient } from '@supabase/supabase-js';

class Repositorio<T> {
    private readonly supabase: SupabaseClient;

    constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    async getAll(tableName: string): Promise<T[]> {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }

        return data as T[];
    }

    async getById(tableName: string, id: number): Promise<T | null> {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('*')
            .eq('id', id)
            .single();
            
        if (error) {
            throw new Error(error.message);
        }
    
        return data ? data as T : null;
    }

    async create(tableName: string, item: T): Promise<T> {
        const { data, error } = await this.supabase
            .from(tableName)
            .insert([item])
            .select('*')
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data as T;
    }

    async update(tableName: string, id: string | number, item: Partial<T>): Promise<T | null> {
        const { data, error } = await this.supabase
            .from(tableName)
            .update(item)
            .eq('id', id)
            .select('*')
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return data as T | null;
    }

    async delete(tableName: string, id: string | number): Promise<void> {
        const { error } = await this.supabase
            .from(tableName)
            .delete()
            .eq('id', id);

        if (error) {
            throw new Error(error.message);
        }
    }
}

export default Repositorio
