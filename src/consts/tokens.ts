import { WarpTokenConfig } from '../features/tokens/types';

export const tokenList: WarpTokenConfig = [
  // bsc
  {
    type: 'collateral',
    chainId: 56,
    address: '0x37a56cdcD83Dce2868f721De58cB3830C44C6303',
    hypCollateralAddress: '0xC27980812E2E66491FD457D488509b7E04144b98',
    symbol: 'ZBC',
    name: 'Zebec',
    decimals: 9,
  },

  // nautilus
  {
    type: 'native',
    chainId: 22222,
    hypNativeAddress: '0x4501bBE6e731A4bC5c60C03A77435b2f6d5e9Fe7',
    symbol: 'ZBC',
    name: 'Zebec',
    decimals: 18,
  },

  // solana
  {
    type: 'collateral',
    chainId: 1399811149,
    address: 'wzbcJyhGhQDLTV1S99apZiiBdE4jmYfbw99saMMdP59',
    hypCollateralAddress: 'EJqwFjvVJSAxH8Ur2PYuMfdvoJeutjmH6GkoEFQ4MdSa',
    name: 'Zebec',
    symbol: 'ZBC',
    decimals: 9,
    isSpl2022: false,
  },
];
