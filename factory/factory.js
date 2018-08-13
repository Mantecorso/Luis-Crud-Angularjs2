app.factory('AppService', function () {
    function setDemoData() {
        const demoData = [
            {
                
                "usuario": "paciente",
                "NHC": "0001",
                "nombre": "Luis",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "71421821J",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "NombreAseguradora": "ASISA",
                "TipodeSeguro": "Familiar",
                "NumerodeTarjeta": "999999999"
            },{
                
                "usuario": "profesional",
                "Numero_de_colegiado": "1111",
                "nombre": "Antonio",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "45361821J",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "Tipo": "Medico"
            },{
                
                "usuario": "paciente",
                "NHC": "0002",
                "nombre": "Mercedes",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Femenino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "71433321J",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "NombreAseguradora": "ASISA",
                "TipodeSeguro": "Familiar",
                "NumerodeTarjeta": "999999999"
            },{
                
                "usuario": "profesional",
                "numero_de_colegiado": "2222",
                "nombre": "Pepe",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "71421432K",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "Tipo": "Enfermero"
            },{
                
                "usuario": "paciente",
                "NHC": "0003",
                "nombre": "Javier",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "71421565P",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "NombreAseguradora": "ASISA",
                "TipodeSeguro": "Familiar",
                "NumerodeTarjeta": "999999999"
            },{
                
                "usuario": "profesional",
                "Numero_de_colegiado": "3333",
                "nombre": "Juan",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "234567219L",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "Tipo": "Medico"
            },{
                
                "usuario": "paciente",
                "NHC": "0004",
                "nombre": "Iker",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "714567345V",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "NombreAseguradora": "ASISA",
                "TipodeSeguro": "Familiar",
                "NumerodeTarjeta": "999999999"
            },{
                
                "usuario": "profesional",
                "Numero_de_colegiado": "4444",
                "nombre": "Luis",
                "erApellido": "Jurado",
                "doApellido": "Quesada",
                "Genero": "Masculino",
                "FechadeNacimiento": "19/08/1977",
                "NIF": "7142546094L",
                "Telefono": "693300019",
                "Calle": "El Marquesat",
                "Numero": "3",
                "Puerta": "4",
                "Codigo_Postal": "46900",
                "Ciudad": "Torrent",
                "Provincia": "Valencia",
                "Tipo": "Administrativo"
            }
        
        ]

          window.localStorage.setItem('users', JSON.stringify(demoData));
          return demoData;
    }
      
    return{
        getUsers: function () {

            return JSON.parse(window.localStorage.getItem('users')) || setDemoData();


        }
    }
});