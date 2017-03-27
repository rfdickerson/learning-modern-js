/*
 * action types
 */

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}