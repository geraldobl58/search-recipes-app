import React from 'react';

import { Card, CardContent } from '@material-ui/core';

import { Title } from './styles';

export default function Recipe({ recipe: { recipe } }) {
  const { label, image } = recipe;

  return (
    <Card>
      <CardContent>
        <Title>{label}</Title>
        <img src={image} alt={label} />
      </CardContent>
    </Card>
  );
}