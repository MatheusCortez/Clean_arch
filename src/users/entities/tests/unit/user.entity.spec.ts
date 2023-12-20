import { UserEntity, UserProps } from '../../user.entity'
import { faker } from '@faker-js/faker'

describe('User Entity unit Tests', () => {
    let props: UserProps
    let suv: UserEntity
    beforeEach(() => {
        props = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }

        suv = new UserEntity(props)
    })
    it('Should be returned props inputed in UserEntity', async () => {
        expect(suv.props.name).toBe(props.name)
        expect(suv.props.email).toBe(props.email)
        expect(suv.props.password).toBe(props.password)
        expect(suv.props.createdAt).toBeInstanceOf(Date)
    })

    describe('Getters', () => {
        it('Should be returned name in UserEntity', () => {
            expect(suv.props.name).toBeDefined()
            expect(suv.props.name).toBe(props.name)
            expect(typeof suv.props.name).toBe('string')
        })

        it('Should be returned email in UserEntity', () => {
            expect(suv.props.email).toBeDefined()
            expect(suv.props.email).toBe(props.email)
            expect(typeof suv.props.email).toBe('string')
        })
        it('Should be returned password in UserEntity', () => {
            expect(suv.props.password).toBeDefined()
            expect(typeof suv.props.password).toBe('string')
        })
        it('Should be returned createdAt in UserEntity', () => {
            expect(suv.props.createdAt).toBeDefined()
            expect(suv.props.createdAt).toBeInstanceOf(Date)
        })
    })
})
