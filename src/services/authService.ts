import { type AuthResponse } from '@/constants'
export class AuthService {
  static login(email: string, password: string): Promise<AuthResponse> {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(
      (user: { email: string; name: string; surname: string }) => user.email === email,
    )
    if (!user) {
      throw new Error('User not found')
    }
    if (user.password !== password) {
      throw new Error('Invalid password')
    }
    return Promise.resolve({ data: user, message: 'User logged in successfully', success: true })
  }
  static register(user: { email: string; name: string; surname: string }): Promise<AuthResponse> {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const isUserExist = users.find((u: { email: string }) => u.email === user.email)
    if (isUserExist) throw new Error('User already exists')
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    return Promise.resolve({ data: user, message: 'User registered successfully', success: true })
  }
}
