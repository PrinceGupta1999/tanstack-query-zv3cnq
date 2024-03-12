'use server';

export const someAction = async (wait: number) => {
  await new Promise((resolve) => setTimeout(resolve, wait));
  return `waited ${wait}ms`;
};
