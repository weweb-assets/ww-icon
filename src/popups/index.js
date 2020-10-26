import './stories';

export default async function openPopup() {
    try {
        return await wwLib.wwPopups.open({ firstPage: 'WWICON_SELECT' });
    } catch (err) {
        return null;
    }
}
