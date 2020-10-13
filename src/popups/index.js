import './stories';

export default async function openPopup({ fontSize, color, icon, uid }) {
    try {
        return await wwLib.wwPopups.open({ firstPage: 'WWICON_STYLE', data: { fontSize, color, icon, uid } });
    } catch (err) {
        return null;
    }
}
