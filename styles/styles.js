import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#0284C7',
  background: '#F8FAFC',
  white: '#FFFFFF',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  badgeBg: '#E0F2FE',
  badgeText: '#0369A1',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: 50,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  body: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
  },

  // Main Nav Cards
  mainNavCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  cardSubtitle: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  // Item List Cards
  itemCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardBody: {
    padding: 16,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginLeft: 4,
    flex: 1,
  },
  priceBadge: {
    backgroundColor: COLORS.badgeBg,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  priceText: {
    color: COLORS.badgeText,
    fontSize: 12,
    fontWeight: 'bold',
  },

  // Rent Button
  rentButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  rentButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 16,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 4,
  },
  modalSubTitle: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
  },
  modalButton: {
    flex: 0.48,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Creator Screen
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 12,
  },
  memberCard: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginTop: 10,
  },
  memberTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  memberText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },

  // Bottom Tab Bar
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  activeTabLabel: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});

export default styles;