export interface Product {
    id: string;
    name: string;
    description?: string;
    price: string;
    old_price?: string;
    promo_text?: string;
    image_url: string;
}

export interface CategoryMap {
    [category: string]: Product[];
}

export const categories: CategoryMap = {
    'Promoção': [
        {
            id: 'combo-casal-vip',
            name: 'COMBO CASAL VIP',
            description: '2 PASTEIS TRADICIONAIS + COCA COLA 600 ML',
            price: '46.99', old_price: '56.00', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/dca514d67dba9e0000587722399929ba152b7757325191af1dee51db802490f4/thumb_dca514d67dba9e0000587722399929ba152b7757325191af1dee51db802490f4.jpg'
        }
    ],
    'Combos Pizza': [
        {
            id: 'combo-pizza-gigante-sobremesa',
            name: 'COMBO PIZZA VIP GIGANTE + SOBREMESA',
            description: 'PIZZA GIGANTE 16 FATIAS +COCA COLA 2 LITROS + 2 AÇAIS DE 300 ML +1 AÇAI DE 400 ML + 1 AÇAI DE 500 ML',
            price: '164.99', promo_text: 'PROMOÇÃO GIGANTE',
            image_url: 'https://images.multipedidos.com.br/products/8CDGD08smnJLZr7BRS33FOvkE9pA27Vix0OHk9UTfSdJGEI6XBxbKojUzLycqnm1/thumb_8CDGD08smnJLZr7BRS33FOvkE9pA27Vix0OHk9UTfSdJGEI6XBxbKojUzLycqnm1.jpg'
        },
        {
            id: 'promo-pizza-broto-gigante-coca',
            name: 'PROMOÇÃO PIZZA BROTO+PIZZA GIGANTE +COCA COLA 2 LITROS',
            description: 'PIZZA BROTO 6 FATIAS +PIZZA GIGANTE 16 FATIAS +COCA COLA 2 LITROS',
            price: '129.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/gHf5aoFT2qIWbRAvVqNLxQey8bBTtiIrpNYdPj1FGXXJpB64nucV6P9Ya31MmiE2/thumb_gHf5aoFT2qIWbRAvVqNLxQey8bBTtiIrpNYdPj1FGXXJpB64nucV6P9Ya31MmiE2.jpg'
        },
        {
            id: 'combo-vip-pizza-acai',
            name: 'PROMOÇÃO COMBO VIP DE PIZZA+2 AÇAÍS DE 300 ML',
            description: 'PIZZA MEDIA 12 FATIAS + 2 AÇAI DE 300 ML E 2 COCA DE 200 ML',
            price: '96.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/k8mcqcylayYoVMQBwH3dCnDgsiL4tZYkBTNh1Jov1fZg09e29SVv5KXjiup8GWbA/thumb_k8mcqcylayYoVMQBwH3dCnDgsiL4tZYkBTNh1Jov1fZg09e29SVv5KXjiup8GWbA.jpg'
        },
        {
            id: 'pizza-gigante-coca-2l',
            name: 'PIZZA GIGANTE + COCA COLA 2 LITROS',
            description: 'Pizza gigante 16 fatias .sabores tradicionais e doces+ coca 2lts',
            price: '95.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/uOYjNBx87XFE0RteX39mPl9o8A23robUqW2TG4vhc1mkB6nNes1AkED74ZVqMjdC/thumb_uOYjNBx87XFE0RteX39mPl9o8A23robUqW2TG4vhc1mkB6nNes1AkED74ZVqMjdC.jpg'
        },
        {
            id: 'promo-pizza-gigante-kuat-2l',
            name: 'PROMOÇÃO PIZZA GIGANTE +REFRI 2 LITROS KUAT',
            description: 'PIZZA GIGANTE 16 FATIAS + REFRIGERANTE KUAT 2 LITROS',
            price: '93.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/XyF7ibRZfsuccpKk1QUJIlj28A08xHdC4aJKSgNBAUuVzI6CfxNTaQqMvnWY193e/thumb_XyF7ibRZfsuccpKk1QUJIlj28A08xHdC4aJKSgNBAUuVzI6CfxNTaQqMvnWY193e.jpg'
        },
        {
            id: 'promo-pizza-grande-kuat-2l',
            name: 'PROMOÇÃO PIZZA GRANDE + KUAT 2 LITROS',
            description: 'PIZZA GIGANTE 14 FATIAS + REFRIGERANTE KUAT 2 LITROS',
            price: '86.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/ER8mBz3A6BlJwPKjnq6FhyWhpKMW29nI8MS7V9rVzTRvi17cL3OQvNXD4iYr4ka1/thumb_ER8mBz3A6BlJwPKjnq6FhyWhpKMW29nI8MS7V9rVzTRvi17cL3OQvNXD4iYr4ka1.jpg'
        },
        {
            id: 'pizza-30cm-1-sabor',
            name: 'PIZZA 30 CM - 1 SABOR',
            description: 'SABORES SELECIONADOS!', price: '37.99',
            image_url: 'https://images.multipedidos.com.br/products/vFuH6xkxJh2RBrgj9eflLYtJV3PVK9GaDaPdOAFMZNY2zg6jTwS7IW8ondqCoiNy/thumb_vFuH6xkxJh2RBrgj9eflLYtJV3PVK9GaDaPdOAFMZNY2zg6jTwS7IW8ondqCoiNy.jpg'
        },
        {
            id: 'pizza-30cm-2-sabores',
            name: 'PIZZA 30 CM - 2 SABORES',
            description: 'SABORES SELECIONADOS!', price: '37.99',
            image_url: 'https://images.multipedidos.com.br/products/vFuH6xkxJh2RBrgj9eflLYtJV3PVK9GaDaPdOAFMZNY2zg6jTwS7IW8ondqCoiNy/thumb_vFuH6xkxJh2RBrgj9eflLYtJV3PVK9GaDaPdOAFMZNY2zg6jTwS7IW8ondqCoiNy.jpg'
        },
    ],
    'Pizzas': [
        {
            id: 'promo-pizza-familia-borda-coca',
            name: 'PROMO DIA PIZZA familia +borda CATUPIRY + coca cola 2 litros',
            description: 'Experimente nossa deliciosa Pizza Família, com generosas 20 fatias, perfeita para compartilhar momentos especiais! Com uma incrível borda de catupiry...',
            price: '114.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/60c4df4601cccfdbb7c6d54830a66765c300b8e467ed888a6ce54b52913b436a/thumb_60c4df4601cccfdbb7c6d54830a66765c300b8e467ed888a6ce54b52913b436a.jpg'
        },
        {
            id: 'pizza-familia-50cm-kuat',
            name: 'PIZZA FAMÍLIA 50 cm + KUAT',
            description: 'Experimente nossa deliciosa Pizza Família, com 20 fatias generosas para compartilhar momentos especiais! Para acompanhar, nada melhor do que um refrescante refrigerante Kuat de 2 litros.',
            price: '100.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/60c4df4601cccfdbb7c6d54830a66765c300b8e467ed888a6ce54b52913b436a/thumb_60c4df4601cccfdbb7c6d54830a66765c300b8e467ed888a6ce54b52913b436a.jpg'
        },
        {
            id: 'pizza-familia-50cm',
            name: 'PIZZA FAMÍLIA 50CM',
            description: 'PIZZA FAMÍLIA, 20 FATIAS',
            price: '89.99', old_price: '100.00', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/YhwbyHxe2YufHXAGuaT6nBcJRPIVfiFPqqzUMDDSmIlOWBCmwrcEjZWG7NKgi0he/thumb_YhwbyHxe2YufHXAGuaT6nBcJRPIVfiFPqqzUMDDSmIlOWBCmwrcEjZWG7NKgi0he.jpg'
        },
        {
            id: 'pizza-familia-50cm-coca',
            name: 'PIZZA FAMÍLIA 50 cm + COCA COLA 2 LITROS',
            description: 'PIZZA FAMÍLIA 20 FATIAS', price: '103.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/5kRpwzc0BKW3yIkFa8rEqhO5s12tjCg9XOdbAmyYrNSfxobGhToc6TMdnBWHElv0/thumb_5kRpwzc0BKW3yIkFa8rEqhO5s12tjCg9XOdbAmyYrNSfxobGhToc6TMdnBWHElv0.jpg'
        },
        {
            id: 'promo-pizza-gigante-45cm-kuat',
            name: 'PROMOÇÃO PIZZA GIGANTE 45CM + REFRI 2 LITROS kuat',
            description: '', price: '93.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/SkkBWTgc25QO7qdTbYtFjdIGIfF0R4wD0soJwcrSneyj34tOiHaYzWmqGh9R8U5H/thumb_SkkBWTgc25QO7qdTbYtFjdIGIfF0R4wD0soJwcrSneyj34tOiHaYzWmqGh9R8U5H.jpg'
        },
        {
            id: 'pizza-broto',
            name: 'Pizza Broto',
            description: '1 Sabor', price: '40.00',
            image_url: 'https://images.multipedidos.com.br/products/SkkBWTgc25QO7qdTbYtFjdIGIfF0R4wD0soJwcrSneyj34tOiHaYzWmqGh9R8U5H/thumb_SkkBWTgc25QO7qdTbYtFjdIGIfF0R4wD0soJwcrSneyj34tOiHaYzWmqGh9R8U5H.jpg'
        },
        {
            id: 'pizza-30cm-8-fatias',
            name: '30 CM - 8 FATIAS',
            description: '', price: '48.99',
            image_url: 'https://images.multipedidos.com.br/products/9e65rpxst2vjc9zvauw2/thumb_9e65rpxst2vjc9zvauw2.jpg'
        },
        {
            id: 'pizza-35cm-12-fatias',
            name: '35 CM - 12 FATIAS',
            description: '', price: '62.99',
            image_url: 'https://images.multipedidos.com.br/products/zmvkx15ylSgduR3q2NZjE6Q08KEwhBBFnCIGiOcmAVfTyQj7NdeZ2rGwV9avcuR4/thumb_zmvkx15ylSgduR3q2NZjE6Q08KEwhBBFnCIGiOcmAVfTyQj7NdeZ2rGwV9avcuR4.jpg'
        },
        {
            id: 'pizza-40cm-14-fatias',
            name: '40 CM - 14 FATIAS',
            description: '', price: '74.99', old_price: '82.99',
            image_url: 'https://images.multipedidos.com.br/products/lSXtD2bWXLJHo1aLsqxkQyMAwHAUM8Najw6NV6GiC9Fdnue5gBkTRSIchv4bmTit/thumb_lSXtD2bWXLJHo1aLsqxkQyMAwHAUM8Najw6NV6GiC9Fdnue5gBkTRSIchv4bmTit.jpg'
        },
        {
            id: 'pizza-gigante-45cm',
            name: 'PIZZA GIGANTE 45CM',
            description: '16 FATIAS', price: '82.99',
            image_url: 'https://images.multipedidos.com.br/products/SsUfjzNng4dNHESYMpX87yi4wpQ0zmTRvCdBgLRbq3HnWYLIf8uhGlJD2WCMs5VK/thumb_SsUfjzNng4dNHESYMpX87yi4wpQ0zmTRvCdBgLRbq3HnWYLIf8uhGlJD2WCMs5VK.jpg'
        },
        {
            id: 'pizza-gigante-coca-2l-b',
            name: 'PIZZA GIGANTE + COCA COLA 2 LITROS',
            description: 'pizza de 16 fatias + coca cola 2 litros',
            price: '96.99', old_price: '90.00',
            image_url: 'https://images.multipedidos.com.br/products/2f5b9aa9c7adaa318c0304d578cc87ab534ecf3f9c5af46c90f9f76c8fe3b6a3/thumb_2f5b9aa9c7adaa318c0304d578cc87ab534ecf3f9c5af46c90f9f76c8fe3b6a3.jpg'
        },
        {
            id: 'pizza-gigante-borda-coca-2l',
            name: 'PIZZA GIGANTE + BORDA CATUPIRY + COCA 2 L',
            description: 'Pizza gigante 16 fatias +borda catupiry + coca cola 2 litros',
            price: '105.99',
            image_url: 'https://images.multipedidos.com.br/products/2f5b9aa9c7adaa318c0304d578cc87ab534ecf3f9c5af46c90f9f76c8fe3b6a3/thumb_2f5b9aa9c7adaa318c0304d578cc87ab534ecf3f9c5af46c90f9f76c8fe3b6a3.jpg'
        },
        {
            id: 'pizza-familia-borda-kuat',
            name: 'PIZZA FAMILIA + BORDA+ KUAT',
            description: '10Pizza familia 20 fatias ,borda de catupiry ou cheddar + kuat 2 litros',
            price: '110.99',
            image_url: 'https://images.multipedidos.com.br/products/fa2e567587fa802a5b3c8a9cf0614d4290873a2b25637af3e64350ab07d44773/thumb_fa2e567587fa802a5b3c8a9cf0614d4290873a2b25637af3e64350ab07d44773.jpg'
        },
    ],
    'DIA DO PASTEL COMBOS': [
        {
            id: 'combo-casal-vip-b',
            name: 'COMBO CASAL VIP',
            description: '2 PASTEIS TRADICIONAIS + COCA COLA 600 ML',
            price: '46.99', old_price: '56.00', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/dca514d67dba9e0000587722399929ba152b7757325191af1dee51db802490f4/thumb_dca514d67dba9e0000587722399929ba152b7757325191af1dee51db802490f4.jpg'
        },
        {
            id: 'combo-vip-pastel',
            name: 'Combo vip',
            description: '1 pastel tradicional + 1 coca-Cola 200 ml',
            price: '22.00', old_price: '25.00', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/873430ff2d5d085d4eb46d9c7c681ce445ba1a3c28c7e6ba11c52e899a9fb646/thumb_873430ff2d5d085d4eb46d9c7c681ce445ba1a3c28c7e6ba11c52e899a9fb646.jpg'
        },
    ],
    'COMBOS': [
        {
            id: 'combo-10-xsimples-refri-2l',
            name: '10 UNIDADES X-SIMPLES + 1 REFRIGERANTE 2L',
            description: '', price: '59.99',
            image_url: 'https://images.multipedidos.com.br/products/312a1351a0f5e280674dfbab59f8aa711e3f1014e03d0a5302825ed076f7edad/thumb_312a1351a0f5e280674dfbab59f8aa711e3f1014e03d0a5302825ed076f7edad.jpg'
        },
        {
            id: 'terca-vip-gourmet',
            name: 'Terça VIP Gourmet 🍔 +Batata +Milkshake 300ml + Coca-Cola!',
            description: 'PÃO BRIOCHE OU PÃO CERVEJINHA, HAMBÚRGUER 180G, QUEIJO MUÇARELA...',
            price: '39.99', promo_text: 'PROMOÇÃO',
            image_url: 'https://images.multipedidos.com.br/products/dc616a7da5a8d03cfcd5e1eb5c90659a682c39912271a55e690e79de7856dc31/thumb_dc616a7da5a8d03cfcd5e1eb5c90659a682c39912271a55e690e79de7856dc31.jpg'
        },
    ],
    'COMBO GOURMET': [
        {
            id: 'gourmet-kids',
            name: 'GOURMET KIDS',
            description: 'PÃO, HAMBÚRGUER GOURMET 180G, QUEIJO, ALFACE AMERICANA...', price: '28.00',
            image_url: 'https://images.multipedidos.com.br/products/IaQjvRtSEijAZo8RrLy3ibo5VuMwL0sF3hv8ZlSe9W2pPQyadVn6wHOYcTf7kK5s/thumb_IaQjvRtSEijAZo8RrLy3ibo5VuMwL0sF3hv8ZlSe9W2pPQyadVn6wHOYcTf7kK5s.jpg'
        },
        {
            id: 'gourmet-da-casa',
            name: 'GOURMET DA CASA',
            description: 'PÃO COM GERGILIM, HAMBÚRGUER GOURMET180G, QUEIJO...', price: '31.99',
            image_url: 'https://images.multipedidos.com.br/products/3b81b012bed03c00c039d9eb3cb19a441e6e74209e3d78826a7faed2d52f8b1a/thumb_3b81b012bed03c00c039d9eb3cb19a441e6e74209e3d78826a7faed2d52f8b1a.jpg'
        },
        {
            id: 'gourmet-vip',
            name: 'GOURMET VIP',
            description: 'PÃO BRIOCHE, HAMBÚRGUER 180G, QUEIJO MUÇARELA, QUEIJO CHEDDAR...', price: '31.99',
            image_url: 'https://images.multipedidos.com.br/products/RClZ2VrZNUbwxF3WLABJ67tDhWMincxHqBiG7nSLuv8dy6lRF5kmTEe1sNa9EIU2/thumb_RClZ2VrZNUbwxF3WLABJ67tDhWMincxHqBiG7nSLuv8dy6lRF5kmTEe1sNa9EIU2.jpg'
        },
        {
            id: 'gourmet-garrote',
            name: 'GOURMET GARROTE',
            description: 'PÃO BRIOCHE OU PÃO CERVEJINHA, HAMBÚRGUER 180G, QUEIJO MUÇARELA...', price: '31.99',
            image_url: 'https://images.multipedidos.com.br/products/xUQWAkvSgVX4eZxDHnbuTs5SN7Iw0qK2RUJLTghjNOzdmY3YrOFHiMtGsFB9mlEP/thumb_xUQWAkvSgVX4eZxDHnbuTs5SN7Iw0qK2RUJLTghjNOzdmY3YrOFHiMtGsFB9mlEP.jpg'
        },
        {
            id: 'gourmet-cheese',
            name: 'GOURMET CHEESE',
            description: 'PÃO BRIOCHE, HAMBÚRGUER 200G, BACON EM TIRAS, QUEIJO CHEDDAR...', price: '31.99',
            image_url: 'https://images.multipedidos.com.br/products/exHGvbLT4q6c1Mu3dyYkPUsKVtWroRm8L2XzDvDmHVycIaf7SEiR98Ubh6T7w4sC/thumb_exHGvbLT4q6c1Mu3dyYkPUsKVtWroRm8L2XzDvDmHVycIaf7SEiR98Ubh6T7w4sC.jpg'
        },
    ],
    'LANCHES': [
        { id: 'lanche-x-burguer', name: 'X-BURGUER', description: 'PÃO, HAMBURGUER GOURMET 120G, QUEIJO E MAIONESE CASEIRA', price: '10.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-simples', name: 'X-SIMPLES', description: 'PÃO, HAMBÚRGUER 56G, ALFACE, TOMATE, QUEIJO E MAIONESE CASEIRA', price: '5.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-salada', name: 'X-SALADA', description: 'PÃO, HAMBÚRGUER GOURMET 120G, QUEIJO, ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '15.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-bacon', name: 'X-BACON', description: 'PÃO, HAMBÚRGUER GOURMET 120G, BACON, QUEIJO,ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/ec321b7e6f5aee01b17f7efe71a90f45a61d11d26a30b08601f5eec4e48c0953/thumb_ec321b7e6f5aee01b17f7efe71a90f45a61d11d26a30b08601f5eec4e48c0953.jpg' },
        { id: 'lanche-x-coracao', name: 'X-CORAÇÃO', description: 'PÃO, HAMBÚRGUER GOURMET, CORAÇÃO, QUEIJO, ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-calabresa', name: 'X-CALABRESA', description: 'PÃO, HAMBÚRGUER GOURMET 120G, CALABRESA, QUEIJO,ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-egg', name: 'X-EGG', description: 'PÃO, HAMBÚRGUER GOURMET 120G, OVO, QUEIJO, ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '17.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-frango', name: 'X-FRANGO', description: 'PÃO, HAMBÚRGUER GOUMET 120G, FILÉ DE FRANGO, QUEIJO,ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
        { id: 'lanche-x-vip', name: 'X-VIP', description: 'PÃO, HAMBÚRGUER GOURMET 120G, BACON, CALABRESA, CORAÇÃO, OVO, FILÉ DE FRANGO, QUEIJO, ALFACE, TOMATE, MILHO, ERVILHA, BATATA PALHA E MAIONESE CASEIRA.', price: '28.00', image_url: 'https://images.multipedidos.com.br/products/cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71/thumb_cd1e302ee019c6d9d27cdc048d9277949bc76ccc115261441c81a3b16c19ce71.jpg' },
    ],
    'PASTEIS TRADICIONAIS': [
        { id: 'pastel-queijo', name: 'PASTEL QUEIJO', description: 'QUEIJO MUÇARELA E ORÉGANO', price: '20.00', old_price: '25.00', image_url: 'https://images.multipedidos.com.br/products/98d14f8fd0926248e6127cba3ae675f3244cac9d9341391013ebe56b583be5c6/thumb_98d14f8fd0926248e6127cba3ae675f3244cac9d9341391013ebe56b583be5c6.jpg' },
        { id: 'pastel-carne', name: 'PASTEL CARNE', description: 'CARNE MOÍDA BEM RECHEADO', price: '20.00', old_price: '25.00', image_url: 'https://images.multipedidos.com.br/products/e79a0a7969fef6e3b9f47c3d2b77087ae733637fde707d74520e95223174652f/thumb_e79a0a7969fef6e3b9f47c3d2b77087ae733637fde707d74520e95223174652f.jpg' },
        { id: 'pastel-frango', name: 'PASTEL FRANGO', description: 'FRANGO DESFIADO', price: '20.00', old_price: '25.00', image_url: 'https://images.multipedidos.com.br/products/2c47e02a5a9b62a82fb3cd0dcf80330b59254dd2d3025d8c40d5f1840a31aec1/thumb_2c47e02a5a9b62a82fb3cd0dcf80330b59254dd2d3025d8c40d5f1840a31aec1.jpg' },
        { id: 'pastel-carne-ovos', name: 'PASTEL CARNE E OVOS', description: 'CARNE MOÍDA E OVOS', price: '20.00', old_price: '25.00', image_url: 'https://images.multipedidos.com.br/products/NZerkNx6VvcpjCPbUzSAJ1f5tq2hYydrh6QeLu9U5cKHIv7jAEynOlF0I7XqiRt4/thumb_NZerkNx6VvcpjCPbUzSAJ1f5tq2hYydrh6QeLu9U5cKHIv7jAEynOlF0I7XqiRt4.jpg' },
        { id: 'pastel-pizza', name: 'PASTEL PIZZA', description: 'QUEIJO MUÇARELA, PRESUNTO, TOMATE E ORÉGANO', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/bfd68592db33a997582317830ea7946db2ee27b98047ec2b75700dea8fad3723/thumb_bfd68592db33a997582317830ea7946db2ee27b98047ec2b75700dea8fad3723.jpg' },
        { id: 'pastel-frango-queijo', name: 'PASTEL FRANGO COM QUEIJO', description: 'FRANGO DESFIADO, QUEIJO MUÇARELA E ORÉGANO', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/89a25a2a3d8611fa56fac13adb209dd765aca943f66ea261193256622b26130c/thumb_89a25a2a3d8611fa56fac13adb209dd765aca943f66ea261193256622b26130c.jpg' },
        { id: 'pastel-carne-queijo', name: 'PASTEL CARNE COM QUEIJO', description: 'CARNE MOÍDA, QUEIJO MUÇARELA E ORÉGANO', price: '20.00', old_price: '25.00', image_url: 'https://images.multipedidos.com.br/products/5206680f83c608b3a5535313d0b2b14422aa4a5f4bf54b22a911797177dde776/thumb_5206680f83c608b3a5535313d0b2b14422aa4a5f4bf54b22a911797177dde776.jpg' },
        { id: 'pastel-vegetariano', name: 'PASTEL VEGETARIANO', description: 'QUEIJO MUSSARELA, BROCOLIS, PALMITO, MILHO, ERVILHA, TOMATE E AZEITONA.', price: '20.00', image_url: 'https://images.multipedidos.com.br/products/7f1c1510bdddf15d8f1ffbffb6fab61a12d11314ba13ae7e8f6e608b3816dc84/thumb_7f1c1510bdddf15d8f1ffbffb6fab61a12d11314ba13ae7e8f6e608b3816dc84.jpg' },
    ],
    'PASTEIS ESPECIAIS': [
        { id: 'pastel-carne-vip', name: 'PASTEL CARNE VIP', description: 'CARNE MOÍDA, QUEIJO MUÇARELA, OVOS, MILHO E ERVILHA', price: '23.99', old_price: '26.00', image_url: 'https://images.multipedidos.com.br/products/d1696b1b2d26f74ed1f3ada9838a931fdcd29389c809a10bbbd7a250e2b061f2/thumb_d1696b1b2d26f74ed1f3ada9838a931fdcd29389c809a10bbbd7a250e2b061f2.jpg' },
        { id: 'pastel-frango-vip', name: 'PASTEL FRANGO VIP', description: 'FRANGO DESFIADO, QUEIJO MUÇARELA, OVOS, MILHO E ERVILHA', price: '23.99', old_price: '26.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-frango-catupiry-vip', name: 'PASTEL FRANGO CATUPIRY VIP', description: 'FRANGO DESFIADO, QUEIJO CATUPIRY E ORÉGANO', price: '23.99', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-carne-catupiry-vip', name: 'PASTEL CARNE CATUPIRY VIP', description: 'CARNE MOÍDA, QUEIJO CATUPIRY', price: '23.99', old_price: '26.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-bacon-vip', name: 'PASTEL BACON VIP', description: 'BACON, QUEIJO MUÇARELA E ORÉGANO', price: '23.99', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-palmito-vip', name: 'PASTEL PALMITO VIP', description: 'PALMITO, QUEIJO MUÇARELA E ORÉGANO', price: '23.99', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-vip-completo', name: 'PASTEL VIP COMPLETO', description: 'CARNE MOÍDA, QUEIJO MUÇARELA, QUEIJO CATUPIRY, OVOS, PALMITO', price: '23.99', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-carne-seca-vip', name: 'PASTEL CARNE SECA VIP', description: 'CARNE SECA, QUEIJO MUSSARELA, CREM CHESSE E OREGANO.', price: '26.99', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
    ],
    'PASTEIS DOCES': [
        { id: 'pastel-sensacao', name: 'Pastel Sensação', description: 'Morango com chocolate ao leite', price: '25.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-tentacao', name: 'Pastel Tentação', description: 'Morango com chocolate branco', price: '25.00', old_price: '30.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-dois-amores', name: 'Pastel Dois Amores', description: 'Chocolate ao leite e chocolate branco', price: '25.00', old_price: '28.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
        { id: 'pastel-banana-nevada', name: 'Pastel Banana Nevada', description: 'Chocolate branco, banana e canela', price: '25.00', old_price: '28.00', image_url: 'https://images.multipedidos.com.br/products/vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98/thumb_vjL3REyZGeWSzd5m79HpAFExJtN3iKIRe08craKN4kq1JLcMhjCkV7yCd1VonB98.jpg' },
    ],
    'BEBIDAS': [
        { id: 'bebida-coca-2l', name: 'COCA COLA 2L', price: '15.00', image_url: 'https://images.multipedidos.com.br/products/9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48/thumb_9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48.jpg' },
        { id: 'bebida-kuat-2l', name: 'KUAT 2L', price: '12.00', image_url: 'https://images.multipedidos.com.br/products/9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48/thumb_9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48.jpg' },
        { id: 'bebida-coca-600ml', name: 'COCA COLA 600ML', price: '9.00', image_url: 'https://images.multipedidos.com.br/products/9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48/thumb_9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48.jpg' },
        { id: 'bebida-fanta-lata', name: 'FANTA LATA 350ML', price: '6.00', image_url: 'https://images.multipedidos.com.br/products/9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48/thumb_9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48.jpg' },
        { id: 'bebida-coca-lata', name: 'COCA COLA LATA 350ML', price: '6.00', image_url: 'https://images.multipedidos.com.br/products/9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48/thumb_9e617f012374e0b7ddbf1e89949f0be8092ea0bb9b132ec71c1686517499ff48.jpg' },
        { id: 'bebida-guarana-lata', name: 'GUARANÁ ANTARCTICA LATA 350ML', price: '6.00', image_url: 'https://images.multipedidos.com.br/products/b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504/thumb_b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504.jpg' },
        { id: 'bebida-coca-200ml', name: 'COCA COLA 200ML', price: '3.00', image_url: 'https://images.multipedidos.com.br/products/b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504/thumb_b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504.jpg' },
        { id: 'bebida-agua-com-gas', name: 'ÁGUA COM GÁS 500ML', price: '3.00', image_url: 'https://images.multipedidos.com.br/products/b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504/thumb_b1cab36cebbcba6cf54fe7c2b315f7367ad7bc2e540676cb35cf7684abd3b504.jpg' },
    ],
    'COMBO DE LANCHES': [
        { id: 'combo-lanche-2p', name: 'COMBO 2 PESSOAS TRADICIONAL + 2 REFRI 200 ML', description: 'PÃO, HAMBURGUER CASEIRO 120g, MAIONESE CASEIRA, QUEIJO, ALFACE, TOMATE, 300g DE BATATA FRITA, 150g DE CALABRESA E 150g DE FRANGO.', price: '55.00', image_url: 'https://images.multipedidos.com.br/products/xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A/thumb_xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A.jpg' },
        { id: 'combo-lanche-3p', name: 'COMBO 3 PESSOAS TRADICIONAL + 3 REFRI 200ML', description: 'PÃO, HAMBURGUER CASEIRO 120g, MAIONESE CASEIRA, QUEIJO, ALFACE, TOMATE, 400g DE BATATA FRITA, 200g DE CALABRESA E 400g FRANGO.', price: '79.99', image_url: 'https://images.multipedidos.com.br/products/xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A/thumb_xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A.jpg' },
        { id: 'combo-lanche-4p', name: 'COMBO 4 PESSOAS TRADICIONAL + REFRI 2 LITROS', description: 'PÃO, HAMBÚRGUER CASEIRO 120 GRAMAS, MAIONESE CASEIRA, QUEIJO, ALFACE, TOMATE, 500g DE BATATA FRITA, 500g DE FRANGO, 250g DE CALABRESA', price: '99.99', image_url: 'https://images.multipedidos.com.br/products/xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A/thumb_xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A.jpg' },
        { id: 'combo-lanche-5p', name: 'COMBO PARA 5 PESSOAS TRADICIONAL + REFRI 2 LTS', description: 'PÃO, HAMBÚRGUER CASEIRO 120 GRAMAS, MAIONESE CASEIRA, QUEIJO, ALFACE, TOMATE, BATATA FRITA 600g, FRANGO 600G, CALABRESA 300G', price: '110.00', image_url: 'https://images.multipedidos.com.br/products/xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A/thumb_xQGoOV7ozdZF2S5JtXSgA61ZV7ElMgbD5FswvKaKhUvMHHxCL9sWhnwfjckyWy8A.jpg' },
        { id: 'combo-lanche-6p', name: 'COMBO PARA 6 PESSOAS TRADICIONAL + REFRI 2L', description: '6 lanches com hambúrguer gourmet de 120gr cada, 700 gr de frango, 350 gr de calabresa e 700G de batata + kuat 2 lt', price: '130.00', image_url: 'https://images.multipedidos.com.br/products/a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936/thumb_a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936.jpg' },
        { id: 'combo-costela-2p', name: 'COMBO COSTELA 2 PESSOAS + 2 COCA DE 200ML', description: '2 lanches com hamburguer de costela 120g + batata frita + 6 polenta + 6 aneis de cebola + 300g de frango + 2 coca de 200 ml.', price: '55.00', image_url: 'https://images.multipedidos.com.br/products/a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936/thumb_a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936.jpg' },
        { id: 'combo-costela-3p', name: 'COMBO COSTELA 3 PESSOAS + 3 COCA DE 200ML', description: '3 Lanches com hamburguer costela 120g + fritas + 9 polenta + 9 aneis de cebola + 400g de frango e molho especial + 3 cocas de 200 ml.', price: '79.99', image_url: 'https://images.multipedidos.com.br/products/a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936/thumb_a6e591ee9e87579b6a0c5796c519b512ff2d720d249561a2f6ab182687a82936.jpg' },
    ]
};
