/** @type {import('prettier').Config} */
import { prettier } from '@afpia/prettier'

export default {
	...prettier,
	plugins: ['prettier-plugin-tailwindcss']
}
