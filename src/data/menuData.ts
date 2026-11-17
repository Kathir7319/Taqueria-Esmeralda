import { MenuItem } from '../types';

export const menuCategories = [
  { id: 'all', name: 'Full Menu', icon: 'UtensilsCrossed' },
  { id: 'tacos', name: 'Street Tacos', icon: 'Flame' },
  { id: 'specialties', name: 'House Specialties', icon: 'Star' },
  { id: 'burritos', name: 'Burritos', icon: 'Wrap' },
  { id: 'quesadillas', name: 'Quesadillas', icon: 'Layers' },
  { id: 'tortas', name: 'Tortas', icon: 'Sandwich' },
  { id: 'sides', name: 'Antojitos & Sides', icon: 'Salad' },
  { id: 'drinks', name: 'Bebidas (Drinks)', icon: 'CupSoda' },
  { id: 'desserts', name: 'Postres (Sweets)', icon: 'Sparkles' }
];

export const meatOptions = [
  'Carne Asada (Grilled Steak)',
  'Pollo Asado (Grilled Chicken)',
  'Al Pastor (Marinated Pork w/ Pineapple)',
  'Carnitas (Slow-Cooked Pork)',
  'Barbacoa (Tender Braised Beef)',
  'Chorizo (Spiced Mexican Sausage)',
  'Vegetarian (Grilled Peppers, Onions & Beans)'
];

export const salsaOptions = [
  'Salsa Verde (Mild Tomatillo & Cilantro)',
  'Salsa Roja (Medium Roasted Tomato & Chiles)',
  'Salsa Habanero (Fiery Hot)',
  'Pico de Gallo (Fresh Diced Tomato, Onion, Lime)'
];

export const tortillaOptions = [
  'Warm Double Corn Tortillas (Traditional Gluten-Free)',
  'Flour Tortilla',
  'Crispy Taco Shell'
];

export const menuItems: MenuItem[] = [
  // Street Tacos
  {
    id: 'taco-asada',
    name: 'Carne Asada Street Taco',
    spanishName: 'Taco de Asada',
    category: 'tacos',
    description: 'Charbroiled flank steak seasoned with citrus marinade, seared on the plancha. Served on warm double corn tortillas with chopped cilantro, diced sweet onions, lime wedge, and caramelized grilled onions (cebollitas).',
    price: 3.50,
    popular: true,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Citrus-marinated steak', 'Double corn tortillas', 'Fresh cilantro', 'Diced onions', 'Grilled scallions', 'Lime'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions,
      tortillas: tortillaOptions
    }
  },
  {
    id: 'taco-pastor',
    name: 'Al Pastor Street Taco',
    spanishName: 'Taco al Pastor con Piña',
    category: 'tacos',
    description: 'Marinated pork steeped for 24 hours in achiote, guajillo peppers, and Mexican spices, topped with caramelized grilled pineapple chunks, cilantro, fresh onions, and lime.',
    price: 3.50,
    popular: true,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Guajillo-achiote pork', 'Caramelized pineapple', 'Double corn tortillas', 'Fresh cilantro', 'Onions', 'Lime'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions,
      tortillas: tortillaOptions
    }
  },
  {
    id: 'taco-pollo',
    name: 'Pollo Asado Street Taco',
    spanishName: 'Taco de Pollo Asado',
    category: 'tacos',
    description: 'Tender chicken thighs marinated in garlic, Mexican oregano, lime, and cumin, grilled to juicy perfection with crispy charred edges. Folded into warm double corn tortillas.',
    price: 3.25,
    popular: false,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Marinated grilled chicken', 'Double corn tortillas', 'Cilantro', 'Diced onions', 'Lime'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions,
      tortillas: tortillaOptions
    }
  },
  {
    id: 'taco-carnitas',
    name: 'Carnitas Michoacán Street Taco',
    spanishName: 'Taco de Carnitas',
    category: 'tacos',
    description: 'Traditional slow-braised pork shoulder simmered for hours with orange peel, Mexican cinnamon, and aromatics until fork-tender with golden crispy edges.',
    price: 3.50,
    popular: true,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Slow-cooked pork shoulder', 'Double corn tortillas', 'Cilantro', 'Diced onions', 'Grilled cebollitas', 'Lime'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions,
      tortillas: tortillaOptions
    }
  },
  {
    id: 'taco-barbacoa',
    name: 'Barbacoa Beef Taco',
    spanishName: 'Taco de Barbacoa',
    category: 'tacos',
    description: 'Slow-steamed seasoned beef braised with dried chilies and spices until deeply savory and shreddable. Rich, aromatic, and comforting.',
    price: 3.75,
    popular: false,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Shredded braised beef', 'Double corn tortillas', 'Cilantro', 'Onions', 'Consomé dip sauce'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions,
      tortillas: tortillaOptions
    }
  },
  {
    id: 'taco-platter',
    name: 'Street Taco Combo Trio (3 Tacos + Rice & Beans)',
    spanishName: 'Platillo Trío de Tacos con Arroz y Frijoles',
    category: 'tacos',
    description: 'Your choice of any 3 authentic street tacos served with our house Mexican red rice, slow-simmered refried pinto beans, grilled jalapeño toreado, and chips with salsa.',
    price: 12.99,
    popular: true,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=80',
    ingredients: ['3 street tacos of choice', 'Mexican red rice', 'Refried pinto beans', 'Chile toreado', 'Salsa flight']
  },

  // House Specialties - Burritos
  {
    id: 'burrito-supremo',
    name: 'Super Burrito Esmeralda',
    spanishName: 'Burrito Supremo',
    category: 'burritos',
    description: 'Gigantic toasted flour tortilla packed with your choice of seasoned meat, Mexican red rice, slow-cooked refried beans, freshly melted jack cheese, pico de gallo, and cool Mexican crema.',
    price: 11.50,
    popular: true,
    spicyLevel: 1,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Toasted flour tortilla', 'Choice of protein', 'Mexican red rice', 'Pinto beans', 'Melted cheese', 'Pico de gallo', 'Crema'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions
    }
  },
  {
    id: 'burrito-california',
    name: 'Cali Street Burrito',
    spanishName: 'Burrito Estilo California',
    category: 'burritos',
    description: 'Loaded with juicy Carne Asada steak, crispy seasoned potato fries, freshly crushed guacamole, melted monterey jack cheese, and roasted chipotle crema.',
    price: 12.75,
    popular: true,
    spicyLevel: 2,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1584031036380-3fb6f2d6c8b9?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Carne asada', 'Crispy fries', 'Guacamole', 'Chipotle crema', 'Jack cheese', 'Large flour tortilla']
  },

  // House Specialties - Quesadillas
  {
    id: 'quesadilla-grande',
    name: 'Cheesy Quesadilla Grande',
    spanishName: 'Quesadilla con Carne',
    category: 'quesadillas',
    description: 'Large grilled flour tortilla toasted golden on the plancha, brimming with melted Oaxaca and Monterey Jack cheese and your choice of protein. Served with cool sour cream, pico de gallo, and house salsa.',
    price: 10.50,
    popular: true,
    spicyLevel: 0,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Oaxaca cheese blend', 'Grilled flour tortilla', 'Choice of meat', 'Sour cream', 'Pico de gallo'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions
    }
  },

  // House Specialties - Tortas
  {
    id: 'torta-clasica',
    name: 'Traditional Mexican Torta',
    spanishName: 'Torta Tradicional',
    category: 'tortas',
    description: 'Traditional Mexican sandwich served on a toasted crusty bolillo roll with a smear of refried beans and creamy mayo, sliced avocado, crisp romaine lettuce, ripe tomatoes, pickled jalapeños, and your choice of meat.',
    price: 11.25,
    popular: true,
    spicyLevel: 1,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Crusty telera/bolillo roll', 'Choice of meat', 'Fresh avocado', 'Refried beans', 'Pickled jalapeños', 'Lettuce & tomato', 'Mayonesa'],
    options: {
      meats: meatOptions,
      salsas: salsaOptions
    }
  },
  {
    id: 'torta-cubana',
    name: 'Torta Cubana Especial',
    spanishName: 'Torta Cubana de la Casa',
    category: 'tortas',
    description: 'The king of Mexican street sandwiches! Loaded with breaded milanesa steak, smoky ham, chorizo, fried egg, melted quesillo cheese, avocado slices, and pickled escabeche peppers.',
    price: 13.95,
    popular: false,
    spicyLevel: 1,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Milanesa', 'Smoked ham', 'Chorizo', 'Egg', 'Quesillo', 'Avocado', 'Bolillo bread']
  },

  // Antojitos & Sides
  {
    id: 'side-guac-chips',
    name: 'Fresh Guacamole & Warm Chips',
    spanishName: 'Guacamole Hecho a Mano con Totopos',
    category: 'sides',
    description: 'Ripe Hass avocados mashed to order with diced red onions, serrano peppers, fresh cilantro, sea salt, and squeezed lime juice. Served with freshly fried crispy tortilla chips.',
    price: 6.95,
    popular: true,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Fresh Hass avocados', 'Lime', 'Cilantro', 'Red onions', 'House-fried corn totopos']
  },
  {
    id: 'side-elote',
    name: 'Elote Callejero (Mexican Street Corn)',
    spanishName: 'Elote Preparado con Queso Cotija',
    category: 'sides',
    description: 'Sweet grilled corn cob brushed with garlic-lime crema, coated in crumbled salty Cotija cheese, dusted with Tajín chili powder and fresh chopped cilantro.',
    price: 4.50,
    popular: true,
    spicyLevel: 1,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Charred sweet corn', 'Cotija cheese', 'Mexican crema', 'Tajín chili', 'Lime']
  },
  {
    id: 'side-rice-beans',
    name: 'Mexican Rice & Refried Beans',
    spanishName: 'Arroz Rojo y Frijoles Refritos',
    category: 'sides',
    description: 'Traditional Mexican red rice cooked in tomato and chicken broth, paired with creamy slow-simmered refried pinto beans sprinkled with queso fresco.',
    price: 4.25,
    popular: false,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Rice', 'Pinto beans', 'Queso fresco', 'Aromatics']
  },

  // Drinks (Bebidas)
  {
    id: 'drink-horchata',
    name: 'Authentic Horchata Casera',
    spanishName: 'Agua Fresca de Horchata',
    category: 'drinks',
    description: 'Traditional Mexican cinnamon-spiced rice milk, sweetened with pure vanilla and cane sugar. Refreshingly chilled over ice.',
    price: 3.50,
    popular: true,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Rice milk', 'Mexican cinnamon', 'Vanilla', 'Cane sugar', 'Ice']
  },
  {
    id: 'drink-jamaica',
    name: 'Agua de Jamaica (Hibiscus)',
    spanishName: 'Agua Fresca de Jamaica',
    category: 'drinks',
    description: 'Naturally tart and sweet iced herbal drink brewed from steeped wild hibiscus flowers. Crisp, floral, and packed with antioxidants.',
    price: 3.50,
    popular: false,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Hibiscus flower brew', 'Cane sugar', 'Fresh lime zest']
  },
  {
    id: 'drink-jarritos',
    name: 'Jarritos Mexican Sodas',
    spanishName: 'Jarritos en Botella de Vidrio',
    category: 'drinks',
    description: 'Iconic Mexican fruit sodas made with 100% natural cane sugar. Flavors: Mandarin, Lime, Tamarind, Pineapple, or Grapefruit.',
    price: 3.00,
    popular: true,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Natural cane sugar', 'Fruit essence', 'Carbonated water']
  },
  {
    id: 'drink-mexican-coke',
    name: 'Mexican Coca-Cola (Glass Bottle)',
    spanishName: 'Coca-Cola de Vidrio Hecha en México',
    category: 'drinks',
    description: 'Imported Mexican Coke bottled in nostalgic glass, sweetened with real cane sugar for the crispest, cleanest taste.',
    price: 3.50,
    popular: true,
    spicyLevel: 0,
    glutenFree: true,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Cane sugar', 'Carbonated water', 'Original cola formula']
  },

  // Desserts (Postres)
  {
    id: 'dessert-churros',
    name: 'Crispy Cinnamon Sugar Churros',
    spanishName: 'Churros Crujientes con Cajeta',
    category: 'desserts',
    description: 'Fried golden to order, rolled in fragrant cinnamon-sugar, and served warm with rich Mexican goat-milk caramel (cajeta) or chocolate dipping sauce.',
    price: 5.50,
    popular: true,
    spicyLevel: 0,
    glutenFree: false,
    image: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=700&q=80',
    ingredients: ['Churro pastry', 'Cinnamon sugar', 'Warm cajeta caramel dip']
  }
];
