import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils';
import StepperHome from '@/components/StepperHome.vue';

describe('StepperHome.vue', () => {
  it('validates form information', async () => {
    const wrapper = mount(StepperHome, {
      propsData: {
        items: [
          "Formato",
          "Questionario",
          "Pagamento",
          "Torneio"
        ],
        stepconfig: {
          step: 3,
          btnSend: true
        },
        substepconfig: {
          step: 0,
          btnSend: false
        },
        form: {
          tornment: {
            standarddata: null,
            moderndata: null,
            pauperdata: null,
          },
          nome: '',
          picked: null,
          format: {
            pauper: null,
            modern: null,
            standard: null,
          },
        },
      },
    });

    await wrapper.setData({
      form: {
        format: { standard: true, modern: false, pauper: true },
        picked: 'Yes',
        nome: 'John Doe',
        tornment: {
          standarddata: '2023-09-11',
          moderndata: '',
          pauperdata: '2023-09-12',
        },
      },
    });
    const btnSend = await wrapper.get('.submit')
    await btnSend.trigger('click')
    expect(wrapper.vm.form).toContain(wrapper.vm.objetoEnvio[0])
  });
  it('Stepper Navigation', async () => {
    const wrapper = mount(StepperHome, {
      propsData: {
        items: [
          "Formato",
          "Questionario",
          "Pagamento",
          "Torneio"
        ],
        stepconfig: {
          step: 0,
          btnSend: true
        },
        substepconfig: {
          step: 0,
          btnSend: false
        },
        form: {
          tornment: {
            standarddata: null,
            moderndata: null,
            pauperdata: null,
          },
          nome: '',
          picked: null,
          format: {
            pauper: null,
            modern: null,
            standard: null,
          },
        },
      },
    });
    await wrapper.get("button").trigger("click")
    expect(wrapper.vm.stepconfig.step).toEqual(1)
    const byId = wrapper.get('#step' + wrapper.vm.stepconfig.step)
    expect(byId.element.id).toBe('step1')
    await wrapper.get("button").trigger("click")
    expect(wrapper.vm.stepconfig.step).toEqual(0)
  })
});
