import { Entity } from '../../entity'
import { isUUIDValidV4 } from '../helpers/uuid-validate'

describe(' Entity unit Tests', () => {
    type StubProps = {
        prop1: string
        prop2: number
    }
    class StubEntity extends Entity<StubProps> {}
    it('Should be set props and id ', async () => {
        const props = {
            prop1: 'string',
            prop2: 23,
        }
        const entity = new StubEntity(props)

        expect(entity._id).not.toBeNull()
        expect(entity.props).toStrictEqual(props)
        expect(isUUIDValidV4(entity._id)).toBeTruthy()
    })
    it('Should be accept valid id ', async () => {
        const props = {
            prop1: 'string',
            prop2: 23,
        }
        const validId = '6a128381-fa89-4381-aa54-52b10ba35414'
        const entity = new StubEntity(props, validId)
        expect(isUUIDValidV4(entity._id)).toBeTruthy()
        expect(entity._id).toBe(validId)
    })

    it('Should convert entity to a Json', async () => {
        const props = {
            prop1: 'string',
            prop2: 23,
        }
        const validId = '6a128381-fa89-4381-aa54-52b10ba35414'
        const entity = new StubEntity(props, validId)
        expect(entity.toJson()).toStrictEqual({ id: validId, ...props })
    })
})
