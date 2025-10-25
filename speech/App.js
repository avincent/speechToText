const parkingConversation = `
Welcome to Downtown Parking.

Current status: 85% full. Please proceed slowly and follow the arrows.

Attention: Reserved spots are only for permit holders. Unauthorized vehicles will be fined.

Parking section A is almost full. Spaces are available in sections B and C.

Reminder: The electric vehicle charging stations are located near the west exit.

Please do not park in fire lanes or obstruct other vehicles.

If you require assistance, press the intercom button or approach the front desk.

We are closing in 30 minutes. Please ensure you retrieve your vehicle before closing.

Thank you for choosing Downtown Parking. Have a safe journey.
`;

import * as Speech from 'expo-speech';

Speech.speak(parkingConversation, { language: 'en-US', rate: 0.9, pitch: 1.0 });
