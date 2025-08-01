import { FormlyFieldConfig, provideFormlyCore } from '@ngx-formly/core';
import { createFieldComponent } from '@ngx-formly/core/testing';
import { withPrimeNG } from './../../primeng.config';

const renderComponent = (field: FormlyFieldConfig) => {
  return createFieldComponent(field, {
    providers: [provideFormlyCore([...withPrimeNG()])],
  });
};

describe('ui-primeng: ifta-label Wrapper', () => {
  xit('should render ifta-label wrapper', () => {
    const { query } = renderComponent({
      wrappers: ['ifta-label'],
      props: {
        label: 'Name',
        required: true,
        description: 'Name description',
      },
    });

    expect(query('formly-wrapper-primeng-ifta-label')).not.toBeNull();

    // Label + Required marker
    expect(query('label').nativeElement.textContent).toEqual(' Name *');
  });

  xit('should show error message', () => {
    const { query } = renderComponent({
      key: 'name',
      wrappers: ['ifta-label'],
      validation: { show: true },
      props: {
        label: 'Name',
        required: true
      }
    });

    expect(query('formly-validation-message')).not.toBeNull();
  });

  it('should hide required marker', () => {
    const { query } = renderComponent({
      wrappers: ['ifta-label'],
      props: {
        label: 'Name',
        hideRequiredMarker: true,
        required: true
      }
    });

    expect(query('label').nativeElement.textContent).toEqual(' Name ');
  });

  it('should hide label', () => {
    const { query } = renderComponent({
      wrappers: ['ifta-label'],
      props: {
        label: 'Name',
        hideLabel: true
      }
    });

    expect(query('label')).toBeNull();
  });
});
