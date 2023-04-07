import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Premier from './composants/Premier';
import Diapositive from './composants/Diapositive';
import Compteur from './composants/Compteur';
// import Like from './composants/Like';
import { useState } from 'react';
import LikeCompteur from './composants/LikeCompteur';
import Composant from './composants/Composant';
import Article from './composants/Article';

export default function App() {

  const liste = [
    { largeur : 10 , hauteur : 40 , unite : "cm"},
    { largeur : 30 , hauteur : 30 , unite : "km"},
    { largeur : 60 , hauteur : 12 , unite : "mm"},
    { largeur : 60 , hauteur : 12 , unite : "mm"},
  ]

  const diapositives = [
    "https://source.unsplash.com/random/200x100" , 
    "https://source.unsplash.com/random/200x101" , 
    "https://source.unsplash.com/random/200x102"
  ];

  const [data , setData] = useState ([ 
    {id : 1 , titre : "article 1" , contenu : "lorem ipsum 1" , nb : 0},
    {id : 2 , titre : "article 2" , contenu : "lorem ipsum 2" , nb : 2},
    {id : 3 , titre : "article 3" , contenu : "lorem ipsum 3" , nb : 10}
])

  /* const likes = [
    { id : 1 , nb : 3 },
    { id : 2  , nb : 10 }
  ];  */

  const [ likes , setLikes ] = useState([
                                { id : 1 , nb : 0 },
                                { id : 2  , nb : 0 }
                              ]); 
  const modifierLike = (id) => {
    // rechercher dans likes le compteur à modifier
    const cloneLikes = [...likes] // clone de l'état dans une variable  cloneLikes
                                  // la variable cloneLikes contient les mêmes valeurs que likes MAIS dispose d'un référence mémoire différente
                                  // c'est la variable que l'on va modifier  
    const compteAModifier = cloneLikes.find(function(item){ return item.id === id})
                                   // rechercher dans un tableau l'élement qui a l'id === 1
                                   // { id : 1 , nb : 3 } === compteAModifier
    const index =  cloneLikes.indexOf(compteAModifier)
                                   // indexOf({ id : 1 , nb : 3 }) permet d'avoir la position 
                                   // de cet élément dans le tableau 
                                   //index === 0
    cloneLikes[index].nb++ 
                    // augmenter de + 1 la valeur de la propriété nb pour l'élement qui a pour position dans le tbleau 0 dans le tableau cloné
    setLikes(cloneLikes); 
                    // on passe au setter de like le clone => react va comparer likes initial et le cloneLikes => il fait la mise à jour juste pour l'élément modifié
    // persistance => SQLITE (sur le smartphone)
    // requête AJAX => API => stocker dans une base de données MongoDB le nombre de like 
    // localStorage (Web) // navigateur web => cookie // session 
    // site internet responsive design => chrome 
    // app mobile => store => télécharger => installer (cgv)
  }

  function augmenterLikeArticle(id){
    const cloneData = [... data] ;
    const articleAModifier = cloneData.find(function(item){ return item.id === id })
    const index = cloneData.indexOf(articleAModifier);
    cloneData[index].nb++
    setData(cloneData); 
  }

  return (
    <View style={styles.container}>
      <ScrollView>

      
        <Composant />

      {likes.map(function(item , index){
        return <LikeCompteur key={index} compteur={item} augmenter={modifierLike} />
      })}

      {data.map(function(article, index){
        return <Article 
                titre={article.titre} 
                contenu={article.contenu} 
                nb={article.nb} 
                key={index} 
                id={article.id} 
                augmenter={augmenterLikeArticle}
              />
      })}
      
      <Compteur />
      {/* exécute le composant Premier dans App en lui ajoutant des props
        en html => attribut 
        vous pouvez en mettre autant que nécessaire nommer comme vous voulez 
      */}
       {/*<Premier largeur={10} hauteur="40" unite="cm" />
       <Premier largeur={30} hauteur="30" unite="km" />
       <Premier largeur={60} hauteur="12" unite="mm" />
      <Premier largeur={60} hauteur="12" unite="mm" />*/}
      { liste.map(({largeur, hauteur, unite}, index) => {
        return <Premier 
                  largeur={largeur} 
                  hauteur={hauteur} 
                  unite={unite} 
                  key={index} 
                  />
                  {/** props spéciale qui permet à React Native de distinguer les différents éléments <Premier /> de la liste */}
      }) }
      {/*[<Premier largeur={10} hauteur="40" unite="cm" /> ,<Premier largeur={30} hauteur="30" unite="km" /> , <Premier largeur={60} hauteur="12" unite="mm" /> , <Premier largeur={60} hauteur="12" unite="mm" /> ] */}
      <View style={{ flexDirection:"row" , justifyContent: "center" }}>
        {diapositives.map(function(diapo , index){
          return <Diapositive url={diapo} key={index} / >
        })}
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// rdv 10h50 @ toute suite !
