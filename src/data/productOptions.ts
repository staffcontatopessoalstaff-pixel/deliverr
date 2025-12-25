export interface OptionItem {
    name: string;
    price?: number;
    description?: string;
}

export interface OptionGroup {
    title: string;
    type?: 'checkbox' | 'radio';
    required?: boolean;
    min?: number;
    max?: number;
    items: OptionItem[];
}

export interface ProductOptionsMap {
    [productId: string]: OptionGroup[];
}

// --- REUSABLE OPTIONS ---
const gourmetAddons: OptionItem[] = [
    { name: 'Bacon em Fatias', price: 4.00 },
    { name: 'Cheddar Cremoso', price: 3.50 },
    { name: 'Anéis de Cebola (4 un)', price: 5.00 },
    { name: 'Ovo', price: 2.00 },
    { name: 'Hambúrguer Extra 180g', price: 10.00 }
];

const gourmetRemove: OptionItem[] = [
    { name: 'Sem Cebola' },
    { name: 'Sem Alface' },
    { name: 'Sem Tomate' }
];

const lancheAdicionais: OptionItem[] = [
    { name: 'Bacon', price: 4.00 },
    { name: 'Ovo', price: 2.00 },
    { name: 'Hambúrguer Extra 120g', price: 7.00 },
    { name: 'Coração', price: 5.00 },
    { name: 'Calabresa', price: 4.00 },
    { name: 'Frango', price: 5.00 }
];

const lancheRemove: OptionItem[] = [
    { name: 'Sem Alface' },
    { name: 'Sem Tomate' },
    { name: 'Sem Milho' },
    { name: 'Sem Ervilha' },
    { name: 'Sem Batata Palha' }
];

const pastelFlavorsTradicionais: OptionItem[] = [
    { name: 'PASTEL QUEIJO' },
    { name: 'PASTEL CARNE' },
    { name: 'PASTEL FRANGO' },
    { name: 'PASTEL CARNE E OVOS' },
    { name: 'PASTEL PIZZA' },
    { name: 'PASTEL FRANGO COM QUEIJO' },
    { name: 'PASTEL CARNE COM QUEIJO' },
    { name: 'PASTEL VEGETARIANO' }
];

const bordasRecheadas: OptionItem[] = [
    { name: 'Sem Borda', price: 0.00 },
    { name: 'Catupiry', price: 5.00 },
    { name: 'Cheddar', price: 5.00 },
    { name: 'Chocolate', price: 7.00 }
];

export const saboresTradicionais: OptionItem[] = [
    { name: 'Calabresa', description: 'Molho, mussarela e calabresa' },
    { name: 'Mussarela', description: 'Molho, mussarela e orégano' },
    { name: 'Marguerita', description: 'Molho, mussarela, tomate e manjericão' },
    { name: 'Frango com Catupiry', description: 'Molho, mussarela, frango e catupiry' },
    { name: 'Portuguesa', description: 'Molho, mussarela, presunto, ovo, cebola e azeitona' },
    { name: 'Napolitana', description: 'Molho, mussarela, tomate e parmesão' }
];

export const saboresEspeciais: OptionItem[] = [
    { name: 'Carne Seca com Catupiry', price: 5.00, description: 'Molho, mussarela, carne seca e catupiry' },
    { name: 'Camarão', price: 10.00, description: 'Molho, mussarela e camarão' },
    { name: 'Filé Mignon com Cheddar', price: 8.00, description: 'Molho, mussarela, filé e cheddar' }
];

export const saboresDoces: OptionItem[] = [
    { name: 'Chocolate', description: 'Chocolate ao leite e granulado' },
    { name: 'Banana com Canela', description: 'Banana, açúcar e canela' },
    { name: 'Prestígio', description: 'Chocolate e coco ralado' }
];

// --- MAIN CONFIG ---
export const productOptions: ProductOptionsMap = {
    'gourmet-vip': [
        { title: 'Deseja retirar algo?', type: 'checkbox', required: false, min: 0, max: 3, items: gourmetRemove },
        { title: 'Adicionais', type: 'checkbox', required: false, min: 0, max: 5, items: gourmetAddons }
    ],
    'gourmet-da-casa': [
        {
            title: 'Pontos da Carne', type: 'radio', required: true, min: 1, max: 1, items: [
                { name: 'Ao Ponto' },
                { name: 'Bem Passado' },
                { name: 'Mal Passado' }
            ]
        },
        { title: 'Adicionais', type: 'checkbox', required: false, min: 0, max: 5, items: gourmetAddons }
    ],
    'lanche-x-salada': [
        { title: 'Remover', type: 'checkbox', required: false, min: 0, max: 5, items: lancheRemove },
        { title: 'Adicionais', type: 'checkbox', required: false, min: 0, max: 5, items: lancheAdicionais }
    ],
    'pizza-gigante-45cm': [
        { title: 'Escolha a Borda', items: bordasRecheadas },
        { title: 'Escolha até 4 Sabores', min: 1, max: 4, type: 'checkbox', items: [] } // Items fetched dynamically
    ],
    'pizza-familia-50cm': [
        { title: 'Escolha a Borda', items: bordasRecheadas },
        { title: 'Escolha até 4 Sabores', min: 1, max: 4, type: 'checkbox', items: [] }
    ],
    'combo-casal-vip': [
        { title: 'Escolha o 1º Pastel', type: 'radio', required: true, min: 1, max: 1, items: pastelFlavorsTradicionais },
        { title: 'Escolha o 2º Pastel', type: 'radio', required: true, min: 1, max: 1, items: pastelFlavorsTradicionais }
    ]
};
