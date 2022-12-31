import React, {useState} from 'react';
import { View, Text, SafeAreaView, TextInput,ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import RNSmtpMailer from 'react-native-smtp-mailer';



const IletisimFormuScreen = ({navigation}) => {
    const [adi, setAdi] = useState('');
    const [adiValid, setAdiValid] = useState(false);
    const [adiValidMesaj, setAdiValidMesaj] = useState('Boş Geçilemez');

    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [emailValidMesaj, setEmailValidMesaj] = useState('Boş Geçilemez');

    const [telefon, setTelefon] = useState('');
    const [telefonValid, setTelefonValid] = useState(false);
    const [telefonValidMesaj, setTelefonValidMesaj] = useState('Boş Geçilemez');


    const [konu, setKonu] = useState('');
    const [konuValid, setKonuValid] = useState(false);
    const [konuValidMesaj, setKonuValidMesaj] = useState('Lütfen seçim yapınız');

    const [sozlesme, setSozlesme] = useState(false);
    const [mesaj, setMesaj] = useState('');
    const [mesajValid, setMesajValid] = useState(false);
    const [mesajValidMesaj, setMesajValidMesaj] = useState('Boş Geçilemez');

    const checkAdi = (text) => {
        setAdi(text);
        if(text.length > 0) {
            setAdiValid(true);
        } else {
            setAdiValid(false);
        }
    };

    const checkEmail = (text) => {
        setEmail(text);
        if(text.length > 0) {
            const reg = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(reg.test(text)) {
                setEmailValid(true);
            } else {
                setEmailValidMesaj('Geçerli bir email adresi giriniz');
                setEmailValid(false);
            }
        } else {
            setEmailValid(false);
            setEmailValidMesaj('Boş Geçilemez')
        }
    };

    const checkTelefon = (text) => {
        setTelefon(text);
        if(text.length > 0) {
            if(text.length == 10) {
                setTelefonValid(true);
            } else {
                setTelefonValidMesaj(
                    'Telefon numaranızı başına 0 koymadan 10 haneli olarak yazınız',
                );
                setTelefonValid(false);
            }
        } else {
            setTelefonValid(false);
            setTelefonValidMesaj('Boş geçilemez');
        }
    };

    const checkKonu =  (value) => {
        setKonu(value);
        if(value.length > 0) {
            setKonuValid(true);
        } else {
            setKonuValid(false);
        }
    };

    const checkMesaj =  (text) => {
        setKonu(text);
        if(text.length > 0) {
            setMesajValid(true);
        } else {
            setMesajValid(false);
        }
    };

    const mailGonder = async () => {
        
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#dddddd'}}>
            <ScrollView style={{flex: 1}}>
                <View style={{margin: 20}}>
                    <TextInput
                    value={adi}
                    onChangeText={(text) => checkAdi(text)}
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        paddingLeft: 20,
                        marginBottom: 10,
                        height: 60,
                    }}
                    placeholder="Adınız ve Soyadınız  *"
                    fontSize={18}
                    secureTextEntry={false}
                    />
                    {adiValid == false ? (
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                            <Text style={{color: '#ff0000', fontSize: 12}}>
                                {adiValidMesaj}
                            </Text>
                            </View>
                    ) : (
                        <></>
                    )}
                    <TextInput
                    value={email}
                    onChangeText={(text) => checkEmail(text)}
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        paddingLeft: 20,
                        marginBottom: 10,
                        height: 60,
                    }}
                    placeholder="Email Adresiniz *"
                    fontSize={18}
                    keyboardType="email-address"
                    />
                    {emailValid == false ? (
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                            <Text style={{color: '#ff0000', fontSize: 12}}>
                                {emailValidMesaj}
                            </Text>
                        </View>
                    ) : (
                        <></>
                    )}

                    <TextInput
                    value={telefon}
                    onChangeText={(text) => checkTelefon(text)}
                    style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        paddingLeft: 20,
                        marginBottom: 10,
                        height: 60,
                    }}
                    placeholder="Telefon Numaranz *"
                    fontSize={18}
                    keyboardType="phone-pad"
                    />
                    {telefonValid == false ? (
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                            <TextInput style={{color: '#ff0000', fontSize: 12}}>
                                {telefonValidMesaj}
                            </TextInput>
                            </View>
                    ) : (
                        <></>
                    )}

                    <DropDownPicker
                    items={[
                        {
                            label: 'İstek',
                            value: 'İstek',
                        },
                        {
                            label: 'Şikayet',
                            value: 'Şikayet',
                        },
                        {
                            label: 'Öneri',
                            value: 'Öneri',
                        },
                        {
                            label: 'Teşekkür',
                            value: 'Teşekkür',
                        },
                    ]}
                    placeholder="Konu Seçiniz *"
                    defaultValue={konu}
                    containerStyle={{height: 60}}
                    style={{backgroundColor: '#ffffff', marginBottom: 10}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    DropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={(item) => checkKonu(item.value)}
                    />
                    {konuValid == false ? (
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                            <Text style={{color: '#ff0000', fontSize: 12}}>
                                {konuValidMesaj}
                            </Text>
                        </View>
                    ) : (
                        <></>
                    )}
                    <TextInput
                    value={mesaj}
                    onChangeText={(text) => checkMesaj(text)}
                    style={{
                        textAlignVertical: 'top',
                        backgroundColor: '#ffffff',
                        borderRadius: 30,
                        paddingLeft: 20,
                        marginBottom: 10,
                        height: 160,
                    }}
                    placeholder="Mesajınız"
                    fontSize={18}
                    multiline={true}
                    numberOfLines={4}
                    />
                    {mesajValid == false ? (
                        <View style={{alignItems: 'center', marginBottom: 20}}>
                            <Text style={{color: '#ff0000', fontSize: 12}}>
                                {mesajValidMesaj}
                            </Text>
                        </View>
                    ) : (
                        <></>
                    )}
                    <CheckBox
                     onPress={() => setSozlesme(!sozlesme)}
                     title="Yukarıdaki bilgilerin doğruluğunu onaylaıyorum"
                     checked={sozlesme}
                    />

                    <TouchableOpacity
                      onPress={() => mailGonder()}
                      disabled={
                          sozlesme &&
                          adiValid &&
                          emailValid &&
                          konuValid &&
                          mesajValid
                          ? false
                          : true
                      }
                      style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 
                          sozlesme &&
                          adiValid &&
                          emailValid &&
                          telefonValid &&
                          konuValid &&
                          mesajValid
                          ? '#0070d4'
                          : '#888',
                          borderRadius: 30,
                          paddingLeft: 20,
                          marginVertical: 10,
                          height: 60,
                      }}>
                          <Text style={{color: '#ffffff', fontSize: 24}}>Gönder</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default IletisimFormuScreen;

