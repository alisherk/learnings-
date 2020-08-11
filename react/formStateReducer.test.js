import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { formStateReducerUtils } from '../../utils/component-utils/formStateReducer';
import { useReducer } from 'react';

describe('formStateReducer', () => {
  afterEach(cleanup);

  it('returns correct state', async () => {
    const { result } = renderHook(() =>
      useReducer(formStateReducerUtils.formStateReducer, {
        inputValues: {
          userName: 'test'
        }
      })
    );
    const [state] = result.current;
    expect(state).toMatchObject({ inputValues: { userName: 'test' } });
  });

  it('dispatches on FORM_INPUT_UPDATE', () => {
    const { result } = renderHook(() =>
      useReducer(formStateReducerUtils.formStateReducer, {
        inputValues: {
          userName: 'test'
        }
      })
    );
    const [, dispatch] = result.current;
    act(() => {
      dispatch({
        type: formStateReducerUtils.FORM_INPUT_UPDATE,
        value: 'test2',
        input: 'userName'
      });
    });
    const [{ inputValues }] = result.current;
    expect(inputValues).toEqual({ userName: 'test2' });
  });

  it('dispatches on FORM_ERROR', () => {
    const { result } = renderHook(() =>
      useReducer(formStateReducerUtils.formStateReducer, {
        error: null
      })
    );
    const [, dispatch] = result.current;
    act(() => {
      dispatch({
        type: formStateReducerUtils.FORM_ERROR,
        errMessage: 'test error'
      });
    });
    const [error] = result.current;
    expect(error).toEqual({ error: 'test error' });
  });
});
