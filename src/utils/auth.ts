import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET as string;
const SALT_ROUNDS = 10;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not set');
}

export class Auth {
    static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, SALT_ROUNDS);
    }

    static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }

    static generateToken(user: string, id: number): string {
        return jwt.sign({ user, id }, JWT_SECRET, { expiresIn: '48h' });
    }

    static verifyToken(token: string): { id: number } {
        return jwt.verify(token, JWT_SECRET) as { id: number };
    }
}