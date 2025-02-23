import { SupabaseClient } from '@supabase/supabase-js';

class Repositorio<T> {
    private static instance: Repositorio<any> | null = null;
    private readonly supabase: SupabaseClient;

    private constructor(supabase: SupabaseClient) {
        this.supabase = supabase;
    }

    public static getInstance<T>(supabase: SupabaseClient): Repositorio<T> {
        if (!Repositorio.instance) {
            Repositorio.instance = new Repositorio<T>(supabase);
        }

        return Repositorio.instance as Repositorio<T>;
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

    async getLastIndex(tableName: string): Promise<number> {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('id')
            .order('id', { ascending: false })
            .limit(1);

        if (error) {
            throw new Error(error.message);
        }

        if (!data || data.length === 0) {
            return 0;
        }

        return data[0].id + 1 as number;
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
