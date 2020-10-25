import { User } from '@models/User';

test('it should be OK', () => {
    const user = new User();
    user.name = 'Flávio';

    expect(user.name).toEqual('Flávio');
});