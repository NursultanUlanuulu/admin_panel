/**Получение полного имени юзера
 * @params first_name
 * @params last_name
 * @params second_name
 * @return Example: Иванов Иван Иванович
 */
export const getFullName = (phone: string, first_name?: string, last_name?: string) =>
  `${last_name} ${phone} ${first_name}`;