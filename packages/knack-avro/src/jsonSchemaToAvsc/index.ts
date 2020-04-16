import avsc, {Type} from 'avsc'
import {fromJsonSchemaType} from './fromJsonSchemaType'
import {JsonSchemaType} from '../types'

const DEFAULT_AVRO_SCHEMA_NAMESPACE = 'io.knack.avro'

export const toAvscType = (jsonSchemaType: JsonSchemaType): Type => {
    const avroSchemaType = fromJsonSchemaType(jsonSchemaType)
    avroSchemaType.namespace = DEFAULT_AVRO_SCHEMA_NAMESPACE
    return avsc.Type.forSchema(avroSchemaType as any)
}
