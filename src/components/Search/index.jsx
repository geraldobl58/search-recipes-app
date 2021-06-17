import React, { useState } from 'react';

import api from '../../services/api';

import Recipe from '../Recipe';

import { 
  Button, 
  TextField, 
  Grid, 
  CircularProgress, 
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

import { Content } from './styles';

export default function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alertShow, setAlertShow] = useState(false);
  const [notFound, setNotFoud] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      if (query !== '') {
        setLoading(true);
        const result = await api.get(`search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
        if (result.data.more === false) {
          setNotFoud(true);
        }
        setRecipes(result.data.hits); 
        setQuery('');
        setLoading(false);
      } else {
        setAlertShow(true);
      }
     
    }catch(err) {
      if (err) {
        console.log(err);
      }
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  }

  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
        <Content>
          <form onSubmit={onSubmit}>

          <Grid item xs={12} lg={12}>
            {alertShow && 
              <Alert severity="error">Campo obrigátorio</Alert> 
            }
            <TextField 
                fullWidth 
                label="Pesquisar receita" 
                variant="outlined"
                value={query}
                onChange={handleChange}
              />
              <Button
                type="submit" 
                fullWidth 
                variant="contained" 
                color="primary"
              >
                {loading ? 
                  <CircularProgress color="inherit" size={16} /> : 'Buscar'
                }
              </Button>
              {notFound && (
                <Alert severity="error">Nenhum resultado encontrado!</Alert> 
              )}              
            </Grid>
            <Grid container spacing={3}>
              {recipes.map((recipe, index) => (
                <Grid key={index} item xs={12} sm={3} lg={2}>
                  <Recipe recipe={recipe} />
                </Grid>
              ))}
            </Grid>
            </form>
        </Content>
      </Grid>
    </Grid>
  )
}