/**
 * FLEET & LOGISTICS MANAGER - Gestión de Flota y Logística de Materiales
 * Controla vehículos, mantenimientos, consumos y stock de materiales críticos.
 */

const FleetManager = {
    vehicles: [
        { id: 'FL-001', plate: '1234-BBB', model: 'Renault Kangoo ZE', driver: 'JUAN MARTINEZ', status: 'OPERATIVO', battery: 85, nextITV: '2026-08-15' },
        { id: 'FL-002', plate: '5678-CCC', model: 'Citroen e-Berlingo', driver: 'MARIA LOPEZ', status: 'TALLER', battery: 12, nextITV: '2026-05-20' },
        { id: 'FL-003', plate: '9012-DDD', model: 'Nissan e-NV200', driver: 'CARLOS RUIZ', status: 'OPERATIVO', battery: 92, nextITV: '2026-11-10' }
    ],
    inventory: [
        { id: 'MAT-001', name: 'Detergente Multiusos 5L', stock: 12, minStock: 20, unit: 'Garrafas' },
        { id: 'MAT-002', name: 'Guantes de Nitrilo (Caja 100)', stock: 45, minStock: 15, unit: 'Cajas' },
        { id: 'MAT-003', name: 'Bobina de Papel Industrial', stock: 8, minStock: 10, unit: 'Unidades' },
        { id: 'MAT-004', name: 'Uniforme SIFU (Talla L)', stock: 3, minStock: 5, unit: 'Conjuntos' }
    ],

    init() {
        console.log('🚚 Inicializando Gestión de Flota y Logística...');
        this.checkAlerts();
    },

    checkAlerts() {
        // Alertas de Stock Bajo
        const lowStock = this.inventory.filter(i => i.stock < i.minStock);
        if (lowStock.length > 0 && typeof NotificationsEngine !== 'undefined') {
            NotificationsEngine.addNotification(
                '📦 ALERTA DE STOCKBAJO',
                `Hay ${lowStock.length} productos con existencias por debajo del mínimo de seguridad.`,
                'warning'
            );
        }

        // Alertas de Mantenimiento / Taller
        const inWorkshop = this.vehicles.filter(v => v.status === 'TALLER');
        if (inWorkshop.length > 0 && typeof NotificationsEngine !== 'undefined') {
            NotificationsEngine.addNotification(
                '🔧 VEHÍCULO EN TALLER',
                `El vehículo ${inWorkshop[0].plate} está actualmente fuera de servicio.`,
                'info'
            );
        }
    },

    // ========================================
    // RENDERIZADO UI
    // ========================================

    renderFleetDashboard() {
        const container = document.getElementById('fleet-logistics-container');
        if (!container) return;

        container.innerHTML = `
            <div class="fleet-grid">
                <!-- Gestión de Vehículos -->
                <div class="fleet-section">
                    <div class="f-header">
                        <h3>🚚 Estado de la Flota Eléctrica</h3>
                        <span class="f-count">${this.vehicles.length} Vehículos</span>
                    </div>
                    <div class="vehicle-list">
                        ${this.vehicles.map(v => `
                            <div class="vehicle-card ${v.status.toLowerCase()}">
                                <div class="v-main">
                                    <span class="v-plate">${v.plate}</span>
                                    <span class="v-model">${v.model}</span>
                                </div>
                                <div class="v-stats">
                                    <div class="v-battery">
                                        <div class="battery-bar">
                                            <div class="battery-fill" style="width: ${v.battery}%; background: ${v.battery < 20 ? '#ea4335' : '#34a853'}"></div>
                                        </div>
                                        <span>${v.battery}%</span>
                                    </div>
                                    <span class="v-driver">👤 ${v.driver}</span>
                                </div>
                                <div class="v-status-badge">${v.status}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Logística de Materiales -->
                <div class="fleet-section">
                    <div class="f-header">
                        <h3>📦 Inventario de Materiales Críticos</h3>
                        <button class="f-btn-order" onclick="FleetManager.generateOrder()">Generar Pedido</button>
                    </div>
                    <div class="inventory-list">
                        <table class="inv-table">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Stock</th>
                                    <th>Mínimo</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${this.inventory.map(i => `
                                    <tr class="${i.stock < i.minStock ? 'row-alert' : ''}">
                                        <td>${i.name}</td>
                                        <td><strong>${i.stock}</strong> ${i.unit}</td>
                                        <td>${i.minStock}</td>
                                        <td>
                                            <span class="inv-status ${i.stock < i.minStock ? 'crit' : 'ok'}">
                                                ${i.stock < i.minStock ? 'RECOMPRAR' : 'OK'}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    },

    generateOrder() {
        if (typeof showToast === 'function') {
            showToast('🛒 Pedido de reposición enviado a Compras', 'success');
        }
    }
};

window.FleetManager = FleetManager;
