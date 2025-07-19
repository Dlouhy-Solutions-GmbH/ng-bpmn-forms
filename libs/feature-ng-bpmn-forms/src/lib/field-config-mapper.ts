import {Injectable} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {ComponentType, FormJS} from "./fromjs.models";

@Injectable({
  providedIn: 'root'
})
export class FieldConfigMapper {
  map(json: FormJS): FormlyFieldConfig[] {
    return json.components.map(value => {
      return {
        id: value.id,
        key: value.key,
        type: this.mapType(value.type),
        defaultValue: value.defaultValue,
        props: {
          label: value.label,
          required: value.validate?.required,
          max: value.validate?.max,
          maxLength: value.validate?.maxLength,
          min: value.validate?.min,
          minLength: value.validate?.minLength,
          pattern: value.validate?.pattern,
          options: value.values,

        }
      }
    })
  }

  private mapType(type: ComponentType): string {
    switch (type) {
      case ComponentType.Textfield:
        return 'input'
      default:
        return type
    }
  }
}
