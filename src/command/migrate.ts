export async function migrateKeys(old: any): any {
    const platform_keys: any[] = old.platform_keys;
    const asset_keys: any[] = old.asset_keys;
    const platform = platform_keys.map(key => JSON.parse(key.secret));
    const asset = asset_keys.map(key => JSON.parse(key.secret));
    return {
        meta: "{}",
        platform,
        asset,
    }
}
