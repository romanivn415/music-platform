import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as uuid from 'uuid'
import * as fs from 'fs'

export enum FileTypes {
    AUDIO = 'audio',
    IMAGE = 'image'
}

@Injectable()
export class FileService{
    createFile(type: FileTypes, file: Express.Multer.File): string {
        try{
            const fileExtention: string = file.originalname.split('.').pop()
            const fileName: string = uuid.v4() + '.' + fileExtention
            const filePath: string = path.resolve(__dirname, '..', 'static', type)
            if (!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(filePath: string): string{
        try{
            fs.rmSync(path.resolve(__dirname, '..', 'static', filePath))
            return filePath
        }   
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    updateFile(type: FileTypes, file: Express.Multer.File, filePath: string): string{
        try{
            this.removeFile(filePath)
            return this.createFile(type, file)
        }
        catch(e){
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}