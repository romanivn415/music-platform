import { Test } from '@nestjs/testing'
import { AppModule } from '../src/app.module'

describe('e2e App', () => {
    beforeAll(async () => {
        const moduleRef = 
            await Test.createTestingModule({
                imports: [AppModule]
            }).compile()
    })
    it.todo('should pass')
})