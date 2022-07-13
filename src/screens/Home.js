import React from 'react'
import Button from '../components/Button'
import { Avatar, Card, Title, Text, Divider } from 'react-native-paper';
import BackgroundPlane from '../components/BackgroundPlane'
import { StyleSheet, View, ScrollView } from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="cash" />


export default function Home({ navigation }) {
  return (
    <BackgroundPlane>

      <Card style={{ backgroundColor: "#4d23a1", marginTop: 20 }}>
        <Title style={{ color: "#fff", fontSize: 12, marginLeft: 8 }}>Pending Amount</Title>
        <Card.Content>
          <Title style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>$50000</Title>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained">Pay</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <Divider style={{ marginTop: 15 }} />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: "8%" }}>Apply Loan</Text>

      <Card style={{ backgroundColor: "#fff", margin: 5, marginTop: 15 }}>
        <Card.Title title="Personal Loan" subtitle="Lowest Interest as low as 0.02%" left={LeftContent} />

        <View style={{ flexDirection: "row" }}>
          <View>
            <Title style={{ color: "#000", fontSize: 12, marginLeft: 8 }}>Maximum limit</Title>
            <Card.Content>
              <Title style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>$5000</Title>
            </Card.Content>
          </View>
          <View>
            <Card.Actions style={{ justifyContent: "flex-end" }}>
              <Button mode="outlined" style={{ width: "60%" }}>Get</Button>
            </Card.Actions>
          </View>
        </View>
      </Card>


      <Card style={{ backgroundColor: "#fff", margin: 5, marginTop: 15 }}>
        <Card.Title title="Home Loan" subtitle="Lowest Interest as low as 0.02%" left={LeftContent} />

        <View style={{ flexDirection: "row" }}>
          <View>
            <Title style={{ color: "#000", fontSize: 12, marginLeft: 8 }}>Maximum limit</Title>
            <Card.Content>
              <Title style={{ color: "#000", fontSize: 25, fontWeight: "bold" }}>$4000</Title>
            </Card.Content>
          </View>
          <View>
            <Card.Actions style={{ justifyContent: "flex-end" }}>
              <Button mode="outlined" style={{ width: "60%" }}>Get</Button>
            </Card.Actions>
          </View>
        </View>
      </Card>

    </BackgroundPlane>
  )
}