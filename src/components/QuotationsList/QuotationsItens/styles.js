import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    
    contextLeft: {
        width: '40%',
        height: '100%',
        alignItems: 'flex-start',
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 5,
    },
    dayCotation: {
        marginLeft: 10,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    contextRight: {
        width: '56%',
        alignItems: 'flex-end',
    },
    price: {
        marginRight: 5,
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    
    
    
});

export default styles;