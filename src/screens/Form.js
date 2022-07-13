import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, RadioButton } from 'react-native-paper'
import BackgroundPlane from '../components/BackgroundPlane'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'

export default function LoginScreen({ navigation }) {
  const [firstName, setfiestName] = useState({ value: '', error: '' })
  const [lastName, setLastName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [date, setDate] = useState({ value: '', error: '' })
  const [mobile, setMobile] = useState({ value: '', error: '' })
  const [street, setStreet] = useState({ value: '', error: '' })
  const [appart, setAppart] = useState({ value: '', error: '' })
  const [zip, setZip] = useState({ value: '', error: '' })
  const [state, setState] = useState({ value: '', error: '' })
  const [id, setId] = useState({ value: '', error: '' })
  const [ids, setIds] = useState({ value: '', error: '' })

  const [value, setValue] = React.useState('')
  const [valueId, setValueId] = React.useState('')

  const getId = (val) => {
    if (val == "Driver Licence") {
      return "1"
    }
    else if (val == "Non-Driver/State ID") {
      return "2"

    }
    else if (val == "US Military") {
      return "3"

    }
    else if (val == "US Military") {
      return "4"
    }
  }


  const onLoginPressed = () => {
    let idRadio = getId(value)
    let SubmitData = {
      PersonalDetails: {
        FirstName: firstName.value,
        LastName: lastName.value,
        EmailAddress: email.value,
        PhoneNumber: mobile.value,
        DateOfBirth: date.value,
      },
      Address: {
        StreetAddress: street.value,
        ApartmentNumber: appart.value,
        ZipCode: zip.value,
        State: state.value,
      },
      Identification: {
        ResidentialProof: value,
        ResidentialProofID: idRadio,
        IdNumber: id.value,
        IdState: ids.value,
      }
    }
    console.log(SubmitData, "final data")
  }

  return (
    <ScrollView>

      <BackgroundPlane>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Customer Information</Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "8%" }}>Personal details</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <TextInput
              label="First Name"
              returnKeyType="next"
              value={firstName.value}
              onChangeText={(text) => setfiestName({ value: text, error: '' })}
              error={!!firstName.error}
              errorText={firstName.error}
              autoCapitalize="none"
            />
          </View>
          <View style={{ width: "48%" }}>
            <TextInput
              label="Last Name"
              returnKeyType="next"
              value={lastName.value}
              onChangeText={(text) => setLastName({ value: text, error: '' })}
              error={!!lastName.error}
              errorText={lastName.error}
              autoCapitalize="none"
            />
          </View>
        </View>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <TextInput
              label="Date"
              returnKeyType="next"
              value={date.value}
              onChangeText={(text) => setDate({ value: text, error: '' })}
              error={!!date.error}
              errorText={date.error}
              autoCapitalize="none"
            />
          </View>
          <View style={{ width: "48%" }}>
            <TextInput
              label="Mobile No"
              returnKeyType="next"
              value={mobile.value}
              onChangeText={(text) => setMobile({ value: text, error: '' })}
              error={!!mobile.error}
              errorText={mobile.error}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
          </View>
        </View>

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "8%" }}>Address</Text>

        <TextInput
          label="Street Address"
          returnKeyType="next"
          value={street.value}
          onChangeText={(text) => setStreet({ value: text, error: '' })}
          error={!!street.error}
          errorText={street.error}
          autoCapitalize="none"
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <TextInput
              label="Appartment Number"
              returnKeyType="next"
              value={appart.value}
              onChangeText={(text) => setAppart({ value: text, error: '' })}
              error={!!appart.error}
              errorText={appart.error}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
          </View>
          <View style={{ width: "48%" }}>
            <TextInput
              label="Zip Code"
              returnKeyType="next"
              value={zip.value}
              onChangeText={(text) => setZip({ value: text, error: '' })}
              error={!!zip.error}
              errorText={zip.error}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <TextInput
          label="State"
          returnKeyType="next"
          value={state.value}
          onChangeText={(text) => setState({ value: text, error: '' })}
          error={!!state.error}
          errorText={state.error}
        />

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "8%" }}>Identification</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
            <View style={{ width: "48%", borderWidth: 1, borderColor: "#000", borderRadius: 5, flexDirection: "row", height: 58, alignItems: "center", }}>
              <RadioButton value="Driver Licence" />
              <Text>Driver Licence</Text>
            </View>
            <View style={{ width: "48%", borderWidth: 1, borderColor: "#000", borderRadius: 5, flexDirection: "row", height: 58, alignItems: "center", }}>
              <RadioButton value="Non-Driver/State ID" />
              <Text>Non-Driver/State ID</Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
            <View style={{ width: "48%", borderWidth: 1, borderColor: "#000", borderRadius: 5, flexDirection: "row", height: 58, alignItems: "center", }}>
              <RadioButton value="US Military" />
              <Text>US Military</Text>
            </View>
            <View style={{ width: "48%", borderWidth: 1, borderColor: "#000", borderRadius: 5, flexDirection: "row", height: 58, alignItems: "center", }}>
              <RadioButton value="US Passpor" />
              <Text>US Passport</Text>
            </View>
          </View>
        </RadioButton.Group>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <TextInput
              label="ID Number"
              returnKeyType="next"
              value={id.value}
              onChangeText={(text) => setId({ value: text, error: '' })}
              error={!!id.error}
              errorText={id.error}
              autoCapitalize="none"
            />
          </View>
          <View style={{ width: "48%" }}>
            <TextInput
              label="ID State"
              returnKeyType="next"
              value={ids.value}
              onChangeText={(text) => setIds({ value: text, error: '' })}
              error={!!ids.error}
              errorText={ids.error}
              autoCapitalize="none"
              keyboardType="number-pad"
            />
          </View>
        </View>

        <Button mode="contained" onPress={onLoginPressed}>
          Submit
        </Button>
      </BackgroundPlane>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
