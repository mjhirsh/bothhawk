import getSession from './getSession'

test('basic', async () => {
  const sessionToken = await getSession()
  expect(sessionToken).toBeTruthy()
})
