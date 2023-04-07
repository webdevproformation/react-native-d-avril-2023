import { View, Text, Button } from 'react-native'
import React, {useState} from 'react'

const Composant = () => {
    const [texte , setTexte] = useState("bonjour") // primitive (string / number / boolean)
    const [nb , setNb] = useState(0) // primitive (string / number / boolean)
    const [liste , setListe] = useState([]); // tableau 
    const [etudiant , setEtudiant] = useState({nom : "Céline" , logged : false});
    function ajouter(){
        /* liste.push({nom : "Alain"});
        setListe(liste); */
        const cloneListe = [...liste] ;
        cloneListe.push({nom : "Alain"});
        setListe(cloneListe); 
    }
    function connexion(){
        /* const cloneEtudiant = { ...etudiant }
        cloneEtudiant.logged = true 
        setEtudiant(cloneEtudiant);  */
        /* const cloneEtudiant = { ...etudiant , logged : true }
        setEtudiant(cloneEtudiant) */
        setEtudiant({ ...etudiant , logged : true })
    }
    function plus5(){
         //nb = nb + 5 erreur 
         //nb +=  5 erreur 
         const total = nb + 5
        setNb( total   ) // ok 
    }
  return (
    <View>
      <Text>{ JSON.stringify(liste) }</Text>
      <Text>{ JSON.stringify(etudiant) }</Text>
      <Text>{ texte }</Text>
      <Button  onPress={connexion} title="btn 2"/>
      <Button  onPress={() => setEtudiant({ ...etudiant , logged : false })} title="btn 3"/>
      <Button  onPress={ajouter} title="btn 1"/>
      <Button  onPress={() => setTexte(`${texte} texte en + `)} title="modifier texte"/>
      <Text>{ nb }</Text>
      <Button  onPress={() => setNb(nb + 1)} title="augmenter nb"/>
      <Button  onPress={plus5} title="augmenter nb + 5"/>
    </View>
  )
}

export default Composant