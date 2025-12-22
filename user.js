// user.js
const users = [
  { username: "Irufan", name: "Abdulla Irufan", passwordHash: "557808176cfefce664c3694042b720e1be6a41974527178598622edc21dc6d9d", Level: "Supervisor" },
  { username: "Hussain", name: "Hussain Ahmed", passwordHash: "0a041b9462caa4a31bac3567e0b6e6fd9100787db2ab433d96f6d178cabfce90", Level: "Supervisor" },
  { username: "Mohamed", name: "Mohamed Ibrahim", passwordHash: "c75f28325cfa028ea13872f977a29e0e87c99a4f390fe260f24d7e1f05fb8d75", Level: "Supervisor" },
  { username: "fiyaza", name: "Fiyaza Abdulla", passwordHash: "ca358cbdaddb39c71130153049e7bc96f387b1f0030deac24841c74f269831ed", Level: "User" },
  { username: "Almas", name: "Aminath Almas", passwordHash: "ca8f5d7677b1bfb7ce14d15ca2f464f46c35e87fddc1409537e4aab52ba3991b", Level: "User" },
  { username: "Jeezaan", name: "Mohamed Jeezaan", passwordHash: "3b3f52f6ba4bac4ed550535531c0e5850a87c4eb87c3a1dab0bb423cf27d7de0", Level: "Supervisor" },
  { username: "Tholal", name: "Ahmed Tholal", passwordHash: "f379c132f3eb4877b078e7fcdd272b24e2010215aa91dc0c1682add172f33767", Level: "User" },
  { username: "Hassan", name: "Hassan Haneef", passwordHash: "aee651be73c9084e024798b3b10ac19ccbf2a905e70571118dd757fc4c99e54a", Level: "User" },
  { username: "Mujahid", name: "Mohamed Mujahid", passwordHash: "38b3361fff128a49da6982886a40f7a12f501f0bd861ec49325f267f7587b7e8", Level: "User" },
  { username: "Fazana", name: "Fazana Ali", passwordHash: "5f4b75634381196faf857ccc46a291a90b75e7406c66a5345ca1537663f6907f", Level: "User" },
  { username: "Fazeel", name: "Adam Fazeel", passwordHash: "8e71b24534e9f3fb3a71263359fed2b7ffb008265e0d34383e319f1b6f5c08f2", Level: "User" },
  { username: "Shafaq", name: "Aishath Shafaq", passwordHash: "60f3222f18a28a9b411de9d657a6fce689ebcfb0baabaac5dfc5dbf53cccd4b2", Level: "User" },
  { username: "Uoola", name: "Aminath Uoola", passwordHash: "beff790a9715a7da02c0e78141eb0d48bbf4b1281f58e5415328e2a653a388e0", Level: "User" },
  { username: "Liushadha", name: "Liushadha Saeed", passwordHash: "0c77ed341492be1ab826c8e20d9ac3969dd8cfc81167531efac5412075800ad0", Level: "User" },
  { username: "Zihan", name: "Ibrahim Zihan", passwordHash: "5b10ca07ace1e66ad4e8b1686ee362e1f646e6b93534b688f390338ac92c8a45", Level: "User" },
  { username: "Rameez", name: "Hussain Rameez", passwordHash: "e36fcb4181514d807160a25447dd39bc4c84a988b9e45c2775f20e08961d3793", Level: "User" },
   { username: "Irufan1", name: "Abdulla Irufan", passwordHash: "557808176cfefce664c3694042b720e1be6a41974527178598622edc21dc6d9d", Level: "User" },
  { username: "Muzaina", name: "Hawwa Muzaina", passwordHash: "0ae2f6c706cff60bff7c0125b99cae8c53e1a1702f02316848bc99e597d084db", Level: "User" },
  { username: "Shimmu", name: "Shimmu Abdulla", passwordHash: "ca4b064b82ac1a7efabf0643e70bfaa5fe7cae8c06fefadef13deb1a4b2b8441", Level: "User" },
  { username: "Maii", name: "Fathimath Maisam", passwordHash: "9ccab5528b26251d3f6f935eec9bc78950ad7445e34dfcb23ac62e7e2839e5c3", Level: "User" },
    { username: "Aini", name: "Ainee Ahmed", passwordHash: "a2417b3cb565395ed7c462c9de0bd9e48bf8da104f9a7c1cf8b6f72aa0dadacf", Level: "User" },
  { username: "leeli", name: "leeli lounge", passwordHash: "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5", Level: "User" },
   
  
];
