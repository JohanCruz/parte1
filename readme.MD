
la app está realizada en node express 
```sh
npm i
npm run dev

funciona en http://localhost:3000/resumen/2019-12-01?dias=2
para dias=2 tenemos de resultado
{
  "total": 18199760.77,
  "comprasPorTDC": {
    "master gold": 829386.7599999998,
    "amex corp": 1123610.63,
    "maestro": 889908.3300000002,
    "visa plat": 1304289.9700000002,
    "amex": 1224692.1699999997,
    "master plat": 1188231.5099999995,
    "visa classic": 1306773.8000000003,
    "privada": 1075418.4300000002,
    "visa debit": 1090328.7200000002,
    "visa gold": 905564.4600000001,
    "master classic": 1173416.9700000002
  },
  "nocompraron": 715,
  "compraMasAlta": 30478.57
}


para dias=5
{
  "total": 90022862.98,
  "comprasPorTDC": {
    "master gold": 2456387.3700000006,
    "amex corp": 3006758.340000002,
    "maestro": 2426453.200000002,
    "visa plat": 3117342.5900000012,
    "amex": 2695125.219999999,
    "master plat": 2689579.359999999,
    "visa classic": 2861427.8000000003,
    "privada": 2536442.4600000004,
    "visa debit": 2662484.090000001,
    "visa gold": 2519399.670000001,
    "master classic": 2974798.720000001
  },
  "nocompraron": 1876,
  "compraMasAlta": 30479.76
}
```