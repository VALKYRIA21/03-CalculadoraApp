import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalucladora} from '../components/BotonCalucladora';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    limpiarNumero,
    armarNumero,
    positivoNegativo,
    botonDelete,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar,
    calcularOperacion,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.textoResultadoPequeno}>
          {numeroAnterior}
        </Text>
      )}

      <Text style={styles.textoResultado}>{numero}</Text>
      <View style={styles.fila}>
        <BotonCalucladora
          color="#9B9B9B"
          texto="C"
          accionCalculadora={limpiarNumero}
        />
        <BotonCalucladora
          color="#9B9B9B"
          texto="+/-"
          accionCalculadora={positivoNegativo}
        />
        <BotonCalucladora
          color="#9B9B9B"
          texto="del"
          accionCalculadora={botonDelete}
        />
        <BotonCalucladora
          color="#FF9427"
          texto="/"
          accionCalculadora={operacionDividir}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalucladora texto="7" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="8" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="9" accionCalculadora={armarNumero} />
        <BotonCalucladora
          color="#FF9427"
          texto="X"
          accionCalculadora={operacionMultiplicar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalucladora texto="4" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="5" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="6" accionCalculadora={armarNumero} />
        <BotonCalucladora
          color="#FF9427"
          texto="-"
          accionCalculadora={operacionRestar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalucladora texto="1" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="2" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="3" accionCalculadora={armarNumero} />
        <BotonCalucladora
          color="#FF9427"
          texto="+"
          accionCalculadora={operacionSumar}
        />
      </View>
      <View style={styles.fila}>
        <BotonCalucladora ancho texto="0" accionCalculadora={armarNumero} />
        <BotonCalucladora texto="." accionCalculadora={armarNumero} />

        <BotonCalucladora
          color="#FF9427"
          texto="="
          accionCalculadora={calcularOperacion}
        />
      </View>
    </View>
  );
};
