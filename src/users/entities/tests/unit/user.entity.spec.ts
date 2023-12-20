import { UserEntity, UserProps } from '../../user.entity'
import { faker } from '@faker-js/faker'

describe('User Entity unit Tests', () => {
    let props: UserProps
    let suv: UserEntity
    it('constructor method', async () => {
        props = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        }

        suv = new UserEntity(props)
        expect(suv.props.name).toBe(props.name)
        expect(suv.props.email).toBe(props.email)
        expect(suv.props.password).toBe(props.password)
        expect(suv.props.createdAt).toBeInstanceOf(Date)
    })
})
