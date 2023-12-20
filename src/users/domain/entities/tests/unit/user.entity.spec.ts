import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'

describe('User Entity unit Tests', () => {
    let props: UserProps
    let sut: UserEntity
    beforeEach(() => {
        props = UserDataBuilder({})

        sut = new UserEntity(props)
    })
    it('Should be returned props inputed in UserEntity', async () => {
        expect(sut.props.name).toBe(props.name)
        expect(sut.props.email).toBe(props.email)
        expect(sut.props.password).toBe(props.password)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    describe('Getters', () => {
        it('Should be returned name in UserEntity', () => {
            expect(sut.props.name).toBeDefined()
            expect(sut.props.name).toBe(props.name)
            expect(typeof sut.props.name).toBe('string')
        })

        it('Should be returned email in UserEntity', () => {
            expect(sut.props.email).toBeDefined()
            expect(sut.props.email).toBe(props.email)
            expect(typeof sut.props.email).toBe('string')
        })
        it('Should be returned password in UserEntity', () => {
            expect(sut.props.password).toBeDefined()
            expect(typeof sut.props.password).toBe('string')
        })
        it('Should be returned createdAt in UserEntity', () => {
            expect(sut.props.createdAt).toBeDefined()
            expect(sut.props.createdAt).toBeInstanceOf(Date)
        })
    })
    describe('Setters', () => {
        it('Setter of name field', () => {
            sut['name'] = 'other name'
            expect(sut.props.name).toEqual('other name')
            expect(typeof sut.props.name).toBe('string')
        })
        it('Setter of password field', () => {
            sut['password'] = 'other password'
            expect(sut.props.password).toEqual('other password')
            expect(typeof sut.props.password).toBe('string')
        })
    })

    describe('Update Methods', () => {
        it('Should update a user', () => {
            sut.update('other name')
            expect(sut.props.name).toEqual('other name')
        })

        it('Should update the password field', () => {
            sut.updatePassword('other password')
            expect(sut.props.password).toEqual('other password')
        })
    })
})
