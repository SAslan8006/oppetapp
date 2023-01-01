import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { CheckBox } from '@rneui/base';
import RNSmtpMailer from 'react-native-smtp-mailer';
import { Picker } from '@react-native-picker/picker';

const IletisimFormuScreen = () => {
  const [adi, setAdi] = useState('');
  const [adiValid, setAdiValid] = useState(false);
  const [adiValidMesaj, setAdiValidMesaj] = useState('Boş Geçilemez!');

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailValidMesaj, setEmailValidMesaj] = useState('Boş Geçilemez!');

  const [telefon, setTelefon] = useState('');
  const [telefonValid, setTelefonValid] = useState(false);
  const [telefonValidMesaj, setTelefonValidMesaj] = useState('Boş Geçilemez!');

  const [konu, setKonu] = useState('Konu Seçiniz');
  const [konuValid, setKonuValid] = useState(false);
  const [konuValidMesaj, setKonuValidMesaj] = useState('Lütfen Seçim Yapınız!');

  const [sozlesme, setSozlesme] = useState(false);
  const [mesaj, setMesaj] = useState('');
  const [mesajValid, setMesajValid] = useState(false);
  const [mesajValidMesaj, setMesajValidMesaj] = useState('Boş Geçilemez!');

  const checkAdi = text => {
    setAdi(text);
    if (text.length > 3) {
      setAdiValid(true);
    } else {
      setAdiValid(false);
    }
  };

  const checkEmail = text => {
    setEmail(text);
    if (text.length > 0) {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(text)) {
        setEmailValid(true);
      } else {
        setEmailValidMesaj('Geçerli bir email adresi giriniz!');
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
      setEmailValidMesaj('Boş Geçilemez!');
    }
  };

  const checkTelefon = text => {
    setTelefon(text);
    if (text.length > 0) {
      if (text.length == 10) {
        setTelefonValid(true);
      } else {
        setTelefonValidMesaj('Telefon numaranızı başına 0 Koymadan 10 heneli olarak yazınız');
        setTelefonValid(false);
      }
    } else {
      setTelefonValid(false);
      setTelefonValidMesaj('Boş Geçilemez!');
    }
  };

  const checkKonu = value => {
    setKonu(value);
    if (value.length > 0) {
      setKonuValid(true);
    } else {
      setKonuValid(false);
    }
  };

  const checkMesaj = text => {
    setMesaj(text);
    if (text.length > 0) {
      setMesajValid(true);
    } else {
      setMesajValid(false);
    }
  };

  const mailGonder = async () => {
    await RNSmtpMailer.sendMail({
      mailhost: "smtp.epostamax.com",
      port: '465',
      ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
      username: 'pge93ltiuk@epostamax.com',
      password: 'IGOEASM23545',
      from: 'pge93ltiuk@epostamax.com',
      fromName: "Süleyman Aslan",
      recipients: email,
      subject: 'Opet App ',
      htmlBody: '<h1> Opet App  | </h1><p>mesaj</p>',
    })
      .then(success => alert(success))
      .catch(err => alert(err));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#dddddd' }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          <TextInput
            value={adi}
            onChangeText={text => checkAdi(text)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="Adınız ve Soyadınız *"
            fontSize={18}
            secureTextEntry={false}
          />
          {adiValid == false ? (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ color: '#ff0000', fontSize: 12 }}>{adiValidMesaj}</Text>
            </View>
          ) : (
            <></>
          )}
          <TextInput
            value={email}
            onChangeText={text => checkEmail(text)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="E-mail Adresiniz *"
            fontSize={18}
            keyboardType="email-address"
          />
          {emailValid == false ? (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ color: '#ff0000', fontSize: 12 }}>{emailValidMesaj}</Text>
            </View>
          ) : (
            <></>
          )}

          <TextInput
            value={telefon}
            onChangeText={text => checkTelefon(text)}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 60,
            }}
            placeholder="Telefon Numaranız *"
            fontSize={18}
            keyboardType="phone-pad"
          />
          {telefonValid == false ? (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ color: '#ff0000', fontSize: 12 }}>{telefonValidMesaj}</Text>
            </View>
          ) : (
            <></>
          )}
          <View style={{ backgroundColor: '#fff', width: '100%', borderRadius: 30 }}>
            <Picker placeholder="Konu Seçiniz" selectedValue={konu} style={{ height: 50, width: 150 }} onValueChange={(itemValue, itemIndex) => checkKonu(itemValue)}>
              <Picker.Item label="İstek" value="İstek" />
              <Picker.Item label="Şikayet" value="Şikayet" />
              <Picker.Item label="Öneri" value="Öneri" />
            </Picker>
          </View>

          {konuValid == false ? (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ color: '#ff0000', fontSize: 12 }}>{konuValidMesaj}</Text>
            </View>
          ) : (
            <></>
          )}
          <TextInput
            value={mesaj}
            onChangeText={text => checkMesaj(text)}
            style={{
              textAlignVertical: 'top',
              backgroundColor: '#ffffff',
              borderRadius: 30,
              paddingLeft: 20,
              marginBottom: 10,
              height: 160,
              marginTop:10
            }}
            placeholder="Mesajınız"
            fontSize={18}
            multiline={true}
            numberOfLines={4}
          />
          {mesajValid == false ? (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ color: '#ff0000', fontSize: 12 }}>{mesajValidMesaj}</Text>
            </View>
          ) : (
            <></>
          )}
          <CheckBox onPress={() => setSozlesme(!sozlesme)} title="Yukarıdaki bilgilerin doğruluğunu onaylıyorum" checked={sozlesme} />

          <TouchableOpacity
            onPress={() => mailGonder()}
            disabled={sozlesme && adiValid && emailValid && telefonValid && konuValid && mesajValid ? false : true}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: sozlesme && adiValid && emailValid && telefonValid && mesajValid ? '#0070d4' : '#888',
              borderRadius: 30,
              paddingLeft: 20,
              marginVertical: 10,
              height: 60,
            }}>
            <Text style={{ color: '#ffffff', fontSize: 24 }}>Gönder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IletisimFormuScreen;
