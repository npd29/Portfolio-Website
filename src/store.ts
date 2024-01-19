import { signal } from '@preact/signals';

export const count = signal(0);

export function handleCount(action: 'increment' | 'decrement' | 'reset') {
    switch (action) {
        case 'increment':
            count.value = count.value + 1;
            break;
        case 'decrement':
            count.value = count.value - 1;
            break;
        case 'reset':
            count.value = 0;
            break;
    }
}

export function conditionallyDisplay(
    param: string | undefined,
    component1: JSX.Element,
    component2: JSX.Element
) {
    if (typeof param !== 'undefined') {
        return param === 'Yes' ? component1 : component2;
    }
    return null;
}
