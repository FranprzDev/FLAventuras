import { DomainException } from '@/types/DomainException';
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

    async getCount(tableName: string): Promise<number> {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('id')
            .eq('estaActiva', true)

        if (error) {
            throw new DomainException(error.message, 404);
        }

        return data ? data.length : 0;
    }

    async findPersonByDNI(tableName: string, dni: string): Promise<boolean> {
        const { data, error } = await this.supabase
            .from(tableName)
            .select('*')
            .eq('estaActiva', true)
            .eq('fk_persona', dni)
            .limit(1);
        
        if (error) {
            throw new DomainException(error.message, 404);
        }

        return data.length > 0;
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
            throw new DomainException(error.message, 404);
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
}

export default Repositorio
