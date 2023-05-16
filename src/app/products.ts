export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'The Autobiography of Malcolm X',
    price: 15.99,
    description: 'The life story of Malcolm X, one of the most influential African American leaders in history.'
  },
  {
    id: 2,
    name: 'The Souls of Black Folk',
    price: 12.99,
    description: 'A seminal work by W.E.B. Du Bois, exploring the experiences of African Americans in the United States.'
  },
  {
    id: 3,
    name: 'Up from Slavery',
    price: 14.99,
    description: 'An autobiography by Booker T. Washington, detailing his journey from slavery to becoming a prominent educator.'
  },
  {
    id: 4,
    name: 'Stride Toward Freedom: The Montgomery Story',
    price: 10.99,
    description: 'Martin Luther King Jr. recounts the Montgomery Bus Boycott and its impact on the civil rights movement.'
  },
  {
    id: 5,
    name: 'Dreams from My Father',
    price: 13.99,
    description: 'Barack Obama\'s memoir reflecting on his early life, family, and the path that led him to the presidency.'
  },
  {
    id: 6,
    name: 'The Autobiography of Medgar Evers',
    price: 16.99,
    description: 'The life and legacy of Medgar Evers, a civil rights activist assassinated in 1963.'
  },
  {
    id: 7,
    name: 'Ella Baker: Freedom Bound',
    price: 11.99,
    description: 'A biography of Ella Baker, a key figure in the civil rights movement and grassroots organizing.'
  },
  {
    id: 8,
    name: 'Thurgood Marshall: American Revolutionary',
    price: 17.99,
    description: 'The story of Thurgood Marshall, the first African American Supreme Court Justice.'
  },
  {
    id: 9,
    name: 'Assata: An Autobiography',
    price: 14.99,
    description: 'The autobiography of Assata Shakur, a prominent figure in the Black Panther Party and activist for black liberation.'
  },
  {
    id: 10,
    name: 'The Black Power Mixtape 1967-1975',
    price: 19.99,
    description: 'A collection of interviews and footage that explores the Black Power movement in the United States.'
  },
];
