export type DomainExceptionType = {
    message: string;
    statusCode?: number;
}

export class DomainException extends Error {
    public statusCode: number;
    constructor(message: string, statusCode: number = 400) {
        super(message);
        this.name = 'DomainException';
        this.statusCode = statusCode;
    }
}

